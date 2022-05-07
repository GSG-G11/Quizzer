import { NextFunction, Response } from 'express';
import { getQuestionsQuery, checkUserAttendQuizQuery } from '../../queries';
import { quizIdSchema } from '../../validation';
import { UserAuth } from '../../interfaces';
import { CustomError } from '../../errors';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { params: { quizId } } = req;
  const { user: { userId } } = req;

  try {
    await quizIdSchema.validate({ quizId });

    const { rowCount: studentDidAttendQuiz } = await checkUserAttendQuizQuery({ userId, quizId });
    if (studentDidAttendQuiz) throw new CustomError('Student can\'t attend a quiz more than once', 401);

    const { rows } = await getQuestionsQuery(quizId);

    if (!rows.length) throw new CustomError('No data for this quiz', 404);

    res.json({ data: rows, message: 'Receiving Quiz Questions Successfully' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
