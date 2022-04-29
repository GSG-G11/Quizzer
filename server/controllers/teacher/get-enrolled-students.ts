import { NextFunction, Response } from 'express';
import { getEnrolledStudentsQuery } from '../../queries';
import { UserAuth } from '../../interfaces';

export default async ({ params: { quizId }, user }:UserAuth, res:Response, next:NextFunction) => {
  const { userId: teacherId } = user;
  try {
    const { rows: enrolledStudents } = await getEnrolledStudentsQuery(quizId, teacherId);
    res.json({ data: enrolledStudents, message: 'success' });
  } catch (error) {
    next(error);
  }
};
