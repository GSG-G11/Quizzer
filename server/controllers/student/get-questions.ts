import { NextFunction, Response } from 'express';
import { getQuestionsQuery } from '../../database/queries';
import { UserAuth } from '../../interfaces';
import { CustomError } from '../../errors';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId }, body: { quizId } } = req;

  try {
    const { rows } = await getQuestionsQuery({ userId, quizId });

    console.log(userId, quizId);

    if (!rows) throw new CustomError('No data for this quiz', 204);

    res.json({ data: rows, message: 'Success got quiz details' });
  } catch (err) {
    next(err);
  }
};
