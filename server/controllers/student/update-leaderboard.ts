import { NextFunction, Response } from 'express';
import { updateScoreQuery } from '../../database/queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';
import { updateLeaderboardSchema } from '../../utils';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const {
    body: { score },
    user: { userId: studentId },
    params: { quizTitle },
  } = req;

  try {
    await updateLeaderboardSchema.validate({ score, quizTitle }, { abortEarly: false });

    const {
      rows: { 0: attempt },
    } = await updateScoreQuery({ quizTitle, studentId, score });

    let message = 'leaderboard updated successfully';

    if (attempt.score > +score) message = 'You scored less than last time';

    return res.json({ data: attempt, message });
  } catch (err) {
    return err.toString().includes('ValidationError')
      ? next(new CustomError(err.errors, 400))
      : next(err);
  }
};
