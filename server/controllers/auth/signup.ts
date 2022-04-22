import { Response, Request, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { createNewUserQuery, checkEmailTakenQuery } from '../../database/queries';
import { signupSchema, signToken } from '../../utils';
import { CustomError } from '../../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      role, email, username, password, bio, avatar,
    } = req.body;

    await signupSchema.validate(req.body);
    const destination = role === 'student' ? 'students' : 'teachers';
    const { rowCount: isEmailTaken } = await checkEmailTakenQuery({ destination, email });
    if (isEmailTaken) throw new CustomError('The email you used is taken', 409);
    const hashedPassword = await hash(password, 10);
    const { rows } = await createNewUserQuery({
      destination,
      email,
      username,
      password: hashedPassword,
      bio,
      avatar,
    });
    const user = rows[0];
    const token = await signToken({ userId: user.id, username, role });

    res
      .status(201)
      .cookie('token', token)
      .json({ data: user, message: 'User Created Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.message, 400)) : next(err);
  }
};
