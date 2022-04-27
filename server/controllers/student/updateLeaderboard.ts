import { NextFunction, Response } from 'express';
import { updateScoreQuery, checkUserScoreQuery, addScoreQuery } from '../../database/queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';
import { updateLeaderboardSchema } from '../../utils';

export default async ({ body, user, params }: UserAuth, res: Response, next: NextFunction) => {
  const { score } = body;
  const { quizTitle } = params;
  const { userId: studentId } = user;

  try {
    await updateLeaderboardSchema.validate({ score, quizTitle }, { abortEarly: false });

    const {
      rows: { 0: prevAttempt },
      rowCount: hasScoredBefore,
    } = await checkUserScoreQuery(studentId, quizTitle);

    if (!hasScoredBefore) {
      const { rows: { 0: quizScore } } = await addScoreQuery({ studentId, score, quizTitle });
      return res.json({ data: quizScore, message: 'score added successfully' });
    }

    const prevScoreGreaterThanNewOne = prevAttempt.score > +score;
    if (prevScoreGreaterThanNewOne) return res.json({ data: prevAttempt, message: 'You scored less than last time' });

    const prevScoreEqualsNewScore = prevAttempt.score === +score;
    if (prevScoreEqualsNewScore) return res.json({ data: prevAttempt, message: 'Your score is equal to last time' });

    const { rows: { 0: attemptData } } = await updateScoreQuery({ studentId, score, quizTitle });

    return res.json({ data: attemptData, message: 'leaderboard updated successfully' });
  } catch (err) {
    return err.toString().includes('ValidationError')
      ? next(new CustomError(err.errors, 400))
      : next(err);
  }
};
