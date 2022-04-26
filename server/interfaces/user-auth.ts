import { Request } from 'express';

interface UserAuth extends Request {
  user: { userId: number, username: string, role: 'student' | 'teacher' },
  quiz ?: {},
}

export default UserAuth;
