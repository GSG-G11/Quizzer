import { Response, Request, NextFunction } from 'express';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { checkEmailTakenQuery } from '../../queries';
import { signToken } from '../../utils';
import { loginSchema } from '../../validation';
import { CustomError } from '../../errors';

dotenv.config();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, password,
    } = await loginSchema.validate(req.body, { abortEarly: false });
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken, rows } = await checkEmailTakenQuery({ destination, email });
    if (!isEmailTaken) throw new CustomError('Incorrect email or password', 401);
    const {
      password: hashedPassword, username, id: userId, bio, avatar, is_verified: isVerified,
    } = rows[0];
    const isPasswordMatch = await compare(password, hashedPassword);
    if (!isPasswordMatch) throw new CustomError('Incorrect email or password', 401);
    const user = {
      userId, username, role, bio, avatar, isVerified,
    };
    const token = await signToken(user);

    res
      .cookie('token', token, { maxAge: 2592000000 })
      .json({ data: user, message: 'User Logged Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
