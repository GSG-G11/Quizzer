import { NextFunction, Response } from 'express';
import { getMyQuizzes } from '../../database/queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { token } = req.cookies;
  const { user: { userId } } = req;

  try {
    const { rows } = await getMyQuizzes(1);
    if (!token) throw new CustomError('Unauthorized', 401);

    res.json({ data: rows, message: 'Success' });
  } catch (err) {
    console.log(err);
  }
};
