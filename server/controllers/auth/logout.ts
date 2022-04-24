import { Request, Response } from 'express';

const logOut = (req:Request, res:Response) => {
  res.clearCookie('token').json({ message: 'Logged Out Successfully' });
};

export default logOut;
