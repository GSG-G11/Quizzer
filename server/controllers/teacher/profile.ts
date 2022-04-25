import { NextFunction, Response } from 'express';
import { userInfo, quizzesInfo } from '../../database/queries';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId } } = req;

  try {
    const { rows: userData } = await userInfo(userId);

    const { rows: quizzesData } = await quizzesInfo(userId);

    res.json({ data: { userData, quizzesData }, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
