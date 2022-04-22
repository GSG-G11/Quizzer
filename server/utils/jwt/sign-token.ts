const { sign } = require('jsonwebtoken');

const signToken = (userId, username) => new Promise((resolve, reject) => {
  sign({ userId, username }, process.env.SECRET_KEY, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});

export default signToken;
