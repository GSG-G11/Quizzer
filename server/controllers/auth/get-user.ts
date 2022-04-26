import { Response, Request, NextFunction } from 'express';
import { CustomError } from '../../errors';
import { verifyToken } from '../../utils';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { cookies: { token } } = req;

  try {
    if (!token) return res.status(404).json({ message: 'User does not exist' });
    const user = await verifyToken(token);
    return res.json({ data: user, message: 'User Found' });
  } catch (err) {
    return err.toString().includes('JsonWebTokenError')
      ? next(new CustomError(err.message, 401))
      : next(err);
  }
};
