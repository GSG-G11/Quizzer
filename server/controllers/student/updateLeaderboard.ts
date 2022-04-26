import { NextFunction, Response } from 'express';
import { updateScoreQuery, checkUserScoreQuery, addScoreQuery } from '../../database/queries';
import { UserAuth } from '../../interfaces';

export default async ({ body, user }: UserAuth, res: Response, next: NextFunction) => {
  const { score, quizTitle } = body;
  const { userId: studentId } = user;

  try {
    const {
      rows: { 0: prevQuiz },
      rowCount: hasScoredBefore,
    } = await checkUserScoreQuery(studentId, quizTitle);

    if (!hasScoredBefore) {
      const { rows: { 0: quizScore } } = await addScoreQuery({ studentId, score, quizTitle });
      return res.json({ data: quizScore, message: 'score added successfully' });
    }

    const prevScoreGreaterThanNewOne = prevQuiz.score > score;

    if (prevScoreGreaterThanNewOne) return res.json({ data: prevQuiz, message: 'You scored less than last time' });

    const { rows: { 0: quizScore } } = await updateScoreQuery({ studentId, score, quizTitle });

    return res.json({ data: quizScore, message: 'score updated successfully' });
  } catch (error) {
    return next(error);
  }
};
