import { NextFunction, Request, Response } from 'express';
import { getLeaderboardQuery } from '../../database/queries';

const getLeaderboard = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { rows } = await getLeaderboardQuery();
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export default getLeaderboard;
