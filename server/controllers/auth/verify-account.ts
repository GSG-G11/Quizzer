import { Request, Response, NextFunction } from 'express';
import { signToken, verifyToken } from '../../utils';
import { verifyAccount, deleteHash } from '../../queries';
import { CustomError } from '../../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { params: { hash } } = req;
  try {
    const user: any = await verifyToken(hash);
    const userId = user.userId as number;
    const role = user.role as 'teacher' | 'student';
    const userInfo = { ...user, isVerified: true };
    const { rowCount: accountExist } = await verifyAccount(role, userId);
    if (!accountExist) throw new CustomError('No such an account', 400);
    const { rowCount: hashDeleted } = await deleteHash(role, userId, hash);
    if (!hashDeleted) throw new CustomError(`No such a hash for user of role ${role}`, 400);
    const token = await signToken(userInfo);
    res
      .cookie('token', token, { maxAge: 2592000000 })
      .redirect('/');
  } catch (err) {
    next(err);
  }
};
