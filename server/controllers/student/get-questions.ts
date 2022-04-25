import { NextFunction, Response } from 'express';
import { getQuestionsQuery, checkUserAttendQuizQuery } from '../../database/queries';
import { UserAuth } from '../../interfaces';
import { CustomError } from '../../errors';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { params: { quizId } } = req;
  const { userId } = req.user;

  try {
    const { rows } = await getQuestionsQuery(quizId);
    const { rowCount: studentDidAttendQuiz } = await checkUserAttendQuizQuery({ userId, quizId });
    console.log(studentDidAttendQuiz);
    if (studentDidAttendQuiz) throw new CustomError('Student can\'t attend a quiz more than once', 401);

    if (!rows) throw new CustomError('No data for this quiz', 204);

    res.json({ data: rows, message: 'Success got quiz details' });
  } catch (err) {
    next(err);
  }
};
