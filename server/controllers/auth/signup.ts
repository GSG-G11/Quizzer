import { Response, Request, NextFunction } from 'express';
import { createNewUserQuery, checkEmailTakenQuery } from '../../database/queries';
import { signupSchema, signToken } from '../../utils';
import { CustomError } from '../../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, userId, username,
    } = req.body;

    await signupSchema.validate({ ...req.body, role });
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken } = await checkEmailTakenQuery({ destination, email });
    if (isEmailTaken) throw new CustomError('The email you used is taken', 409);
    const { rows } = await createNewUserQuery({ destination, ...req.body });
    const user = rows[0];
    const token = await signToken({ userId, username, role });
    res
      .status(201)
      .cookie('token', token)
      .json({ data: user, message: 'User Created Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.message, 400)) : next(err);
  }
};
