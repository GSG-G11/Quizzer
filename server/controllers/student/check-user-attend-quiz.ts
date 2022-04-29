import { Response, NextFunction } from 'express';
import { UserAuth } from '../../interfaces';
import { checkUserAttendQuizQuery } from '../../queries';
import { CustomError } from '../../errors';

export default async (req: UserAuth, res: Response, next: NextFunction) => {
  const { user: { userId }, body: { quizId } } = req;

  try {
    const { rowCount: studentDidAttendQuiz } = await checkUserAttendQuizQuery({ userId, quizId });
    if (studentDidAttendQuiz) throw new CustomError('Student can\'t attend a quiz more than once', 401);
    next();
  } catch (err) {
    next(err);
  }
};
