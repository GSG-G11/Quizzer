const { sign } = require('jsonwebtoken');

export default (userId, username) => new Promise((resolve, reject) => {
  sign({ userId, username }, process.env.SECRET_KEY, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});
