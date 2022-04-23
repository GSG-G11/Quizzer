import { NextFunction, Request, Response } from 'express';
import { quizDetails } from '../../database/queries';
import { CustomError } from '../../errors';

export default async ({ params, cookies }:Request, res:Response, next:NextFunction) => {
  try {
    const { rows } = await quizDetails(params.quizId);
    const { token } = cookies;
    if (!token) throw new CustomError('Unauthorized', 401);

    res.json({ data: rows, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
