import { verify } from 'jsonwebtoken';

const verifyToken = (token) => new Promise((reject, resolve) => {
  verify(token, process.env.SECRET_KEY, (err, match) => {
    if (err) return reject(err);
    return resolve(match);
  });
});

export default verifyToken;
