import { NextFunction, Response } from 'express';
import { deleteQuiz } from '../../queries';
import { CustomError } from '../../errors';
import { quizIdSchema } from '../../validation';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId: teacherId }, params: { quizId } } = req;

  try {
    await quizIdSchema.validate({ quizId });

    const { rowCount } = await deleteQuiz(quizId, teacherId);

    if (!rowCount) throw new CustomError('No quiz to delete it', 400);

    res.json({ message: 'Success delete' });
  } catch (err) {
    err.toString().includes('ValidationError') ? next(new CustomError(err.errors, 400)) : next(err);
  }
};
