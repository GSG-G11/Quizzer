import { Request } from 'express';

interface UserAuth extends Request {
  user: {}
}

export default UserAuth;
