import { NextFunction, Response } from 'express';
import { userInfo, getMyQuizzes } from '../../queries';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId } } = req;

  try {
    const { rows: { 0: userData } } = await userInfo(userId);

    const { rows: quizzesData } = await getMyQuizzes(userId);

    res.json({ data: { userData, quizzesData }, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
