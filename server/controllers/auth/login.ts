import { Response, Request, NextFunction } from 'express';
import { compare } from 'bcrypt';
import { checkEmailTakenQuery } from '../../database/queries';
import { loginSchema, signToken } from '../../utils';
import { CustomError } from '../../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, password,
    } = req.body;
    await loginSchema.validate({ email, password, role });
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken, rows } = await checkEmailTakenQuery({ destination, email });
    if (!isEmailTaken) throw new CustomError('Your email is incorrect', 401);
    const { password: hashedPassword } = rows[0];
    const isPasswordMatch = await compare(password, hashedPassword);
    if (!isPasswordMatch) throw new CustomError('Your password is incorrect', 401);
    const token = await signToken({ email, role });
    const user = rows[0];
    res
      .cookie('token', token)
      .json({ data: user, message: 'User Log in Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.message, 400)) : next(err);
  }
};
