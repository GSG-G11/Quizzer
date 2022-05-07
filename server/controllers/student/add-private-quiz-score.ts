import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { addScoreSchema } from '../../validation';
import { CustomError } from '../../errors';
import { addPrivateQuizScoreQuery, checkQuizExistsQuery } from '../../queries';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { user: { userId }, body: { quizId, score } } = req;

  try {
    await addScoreSchema.validate({ quizId, score }, { abortEarly: false });
    const { rowCount: quizDoesExist } = await checkQuizExistsQuery(quizId);
    if (!quizDoesExist) throw new CustomError('No such a quiz', 400);
    await addPrivateQuizScoreQuery({ userId, quizId, score });
    next();
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
