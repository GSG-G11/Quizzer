import { Response, Request, NextFunction } from 'express';
import { compare } from 'bcrypt';
import { checkEmailTakenQuery } from '../../database/queries';
import { loginSchema, signToken } from '../../utils';
import { CustomError } from '../../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, password,
    } = await loginSchema.validate(req.body, { abortEarly: false });
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken, rows } = await checkEmailTakenQuery({ destination, email });
    if (!isEmailTaken) throw new CustomError('Incorrect email or password', 401);
    const {
      password: hashedPassword, username, id,
    } = rows[0];
    const isPasswordMatch = await compare(password, hashedPassword);
    if (!isPasswordMatch) throw new CustomError('Incorrect email or password', 401);
    const token = await signToken({ id, username, role });

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({ message: 'User Logged Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
