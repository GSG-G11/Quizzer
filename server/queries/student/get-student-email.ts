import dbConnection from '../../database/connections';

export default (userId: number) => dbConnection.query(
  `
    SELECT email FROM students WHERE id = $1
  `,
  [userId],
);
