import { NextFunction, Request, Response } from 'express';
import { getEnrolledStudentsQuery } from '../../database/queries';

export default async ({ params: { quizId } }:Request, res:Response, next:NextFunction) => {
  try {
    const { rows: enrolledStudents } = await getEnrolledStudentsQuery(quizId, '1');
    res.json(enrolledStudents);
  } catch (error) {
    next(error);
  }
};
