import dbConnection from '../../config/connections';

export default (userId: number) => dbConnection.query(
  `
    SELECT email FROM students WHERE id = $1
  `,
  [userId],
);
