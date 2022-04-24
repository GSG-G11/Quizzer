import { NextFunction, Response } from 'express';
import { userInfo, quizzesInfo } from '../../database/queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { token } = req.cookies;
  const { user: { userId } } = req;

  try {
    const { rows: userData } = await userInfo(userId);

    const { rows: quizzesData } = await quizzesInfo(userId);

    if (!token) throw new CustomError('Unauthorized', 401);

    res.json({ data: { userData, quizzesData }, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
