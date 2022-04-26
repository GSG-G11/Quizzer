import { NextFunction, Response } from 'express';
import { updateScoreQuery, checkUserScoreQuery, addScoreQuery } from '../../database/queries';
import { UserAuth } from '../../interfaces';

export default async ({ body, user }: UserAuth, res: Response, next: NextFunction) => {
  const { score, quizTitle } = body;
  const { userId: studentId } = user;

  try {
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

    const { rows: { 0: quizScore } } = await updateScoreQuery({ studentId, score, quizTitle });

    return res.json({ data: quizScore, message: 'leaderboard updated successfully' });
  } catch (error) {
    return next(error);
  }
};
