import { Request, Response } from 'express';

const logOut = (req:Request, res:Response) => {
  res.clearCookie('token').send({ message: 'Logged Out Successfully' });
};

export default logOut;
