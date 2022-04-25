import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { addPrivateQuizScoreQuery } from '../../database/queries';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { user: { userId }, body: { quizId, score } } = req;

  try {
    await addPrivateQuizScoreQuery({ userId, quizId, score });
    next();
  } catch (err) {
    next(err);
  }
};
