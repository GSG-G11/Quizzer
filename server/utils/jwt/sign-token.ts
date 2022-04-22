import { sign } from 'jsonwebtoken';

const { env: { SECRET_KEY } } = process;

export default (user: object) => new Promise((resolve, reject) => {
  sign(user, SECRET_KEY, (err: Error, token: string) => {
    if (err) return reject(err);
    return resolve(token);
  });
});
