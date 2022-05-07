import { NextFunction, Response } from 'express';
import { getMyQuizzes } from '../../queries';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId } } = req;

  try {
    const { rows } = await getMyQuizzes(userId);

    res.json({ data: rows, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
