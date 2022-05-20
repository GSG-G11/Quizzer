import { NextFunction, Response } from 'express';
import { getStdProfile } from '../../queries';
import { UserAuth } from '../../interfaces';

export default async (req:UserAuth, res:Response, next:NextFunction) => {
  const { user: { userId: studentId } } = req;

  try {
    const { rows } = await getStdProfile(studentId);

    res.json({ data: rows, message: 'Success' });
  } catch (err) {
    next(err);
  }
};
