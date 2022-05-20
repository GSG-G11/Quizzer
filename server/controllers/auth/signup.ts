import { Response, Request, NextFunction } from 'express';
import { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';
import { createNewUserQuery, checkEmailTakenQuery } from '../../queries';
import { signToken } from '../../utils';
import { signupSchema } from '../../validation';
import { CustomError } from '../../errors';
import createHash from '../../queries/auth/create-hash';

dotenv.config();

const {
  env: {
    APP_MAIL,
    MAIL_PASSWORD,
  },
} = process;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, username, password, bio, avatar,
    } = req.body;

    await signupSchema.validate(req.body, { abortEarly: false });
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken } = await checkEmailTakenQuery({ destination, email });
    if (isEmailTaken) throw new CustomError('The email you used is taken', 409);
    const hashedPassword = await hash(password, 10);
    const { rows: { 0: user } } = await createNewUserQuery({
      destination,
      email,
      username,
      password: hashedPassword,
      bio,
      avatar,
    });
    const userInfo = {
      userId: user.id, username, role, bio, avatar, isVerified: false,
    };
    const token = await signToken(userInfo) as string;
    await createHash(role, user.id, token);
    const link = `http://quizzer-g11.herokuapp.com/api/v1/auth/confirmation/${token}`;

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: APP_MAIL,
        pass: MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: APP_MAIL,
      to: email,
      subject: 'Quizzer Account Confirmation Email',
      html: `Click on <a href="${link}">THIS</a> link to verify your account`,
    });

    res
      .status(201)
      .cookie('token', token, { maxAge: 2592000000 })
      .json({ data: userInfo, message: 'User Created Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
