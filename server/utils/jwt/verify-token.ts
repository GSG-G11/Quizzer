import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { env: { SECRET_KEY } } = process;

export default (token: string) => new Promise((reject, resolve) => {
  verify(token, SECRET_KEY, (err: Error, match: string) => {
    if (err) return reject(err);
    return resolve(match);
  });
});
