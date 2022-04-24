import { NextFunction, Request, Response } from 'express';
import { getLeaderboardQuery } from '../../database/queries';

export default async ({ params: { quizTitle } }:Request, res:Response, next:NextFunction) => {
  try {
    const { rows: leaderboard } = await getLeaderboardQuery(quizTitle);
    res.json({ data: leaderboard, message: 'Success' });
  } catch (error) {
    next(error);
  }
};
