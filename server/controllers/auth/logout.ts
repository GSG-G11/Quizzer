import { Request, Response } from 'express';

const logOut = (req:Request, res:Response) => {
  res.clearCookie('token').end();
};

export default logOut;
