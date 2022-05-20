/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import CustomError from './custom-error';

const clientError = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Page Not Found' });
};

const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json(err);
};

export { clientError, serverError, CustomError };
