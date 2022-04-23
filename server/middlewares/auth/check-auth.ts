import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { CustomError } from '../../errors';
import { verifyToken } from '../../utils';

export default (role: 'student' | 'teacher') => async (req: UserAuth, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  try {
    if (!token) throw new CustomError('Unauthorized', 401);
    const user: any = await verifyToken(token);
    if (user.role !== role) throw new CustomError('Unauthorized', 401);
    req.user = user;
    next();
  } catch (err) {
    err.toString().includes('JsonWebTokenError') ? next(new CustomError(err.message, 401)) : next(err);
  }
};
