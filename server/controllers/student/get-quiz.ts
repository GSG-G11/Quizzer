import { NextFunction, Request, Response } from 'express';
import { getQuizQuery } from '../../queries';
import { CustomError } from '../../errors';

export default async ({ params: { quizId } }:Request, res:Response, next:NextFunction) => {
  try {
    const { rows: { 0: quiz }, rowCount: quizFound } = await getQuizQuery(quizId);

    if (!quizFound) throw new CustomError('No quiz found', 404);

    res.json({ data: quiz, message: 'Success' });
  } catch (error) {
    next(error);
  }
};
