import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { CustomError } from '../../errors';
import { verifyToken } from '../../utils';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  try {
    if (!token) throw new CustomError('Unauthorized', 401);
    const user = await verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    if (err.toString().includes('JsonWebTokenError')) {
      next(new CustomError(err.message, 401));
    } else {
      next(err);
    }
  }
};
