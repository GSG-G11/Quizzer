import { NextFunction, Request, Response } from 'express';
import { getQuizQuery } from '../../database/queries';
import { CustomError } from '../../errors';

const getQuiz = async ({ params }:Request, res:Response, next:NextFunction) => {
  try {
    const { rows: { 0: quiz }, rowCount } = await getQuizQuery(params.quizId);

    if (!rowCount) throw new CustomError('No quiz found with that join code', 404);

    res.json({ data: quiz, message: 'Success' });
  } catch (error) {
    next(error);
  }
};
export default getQuiz;
