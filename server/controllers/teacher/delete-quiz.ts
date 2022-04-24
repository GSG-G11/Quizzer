import { NextFunction, Response } from 'express';
import { deleteQuiz } from '../../database/queries';
import { CustomError } from '../../errors';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { params } = req;

  try {
    const { rowCount } = await deleteQuiz(params.quizId);
    console.log(rowCount);

    if (!rowCount) throw new CustomError('No quiz to delete it', 400);

    res.json({ message: 'Success delete' });
  } catch (err) {
    next(err);
  }
};
