import dbConnection from '../../database/connections';

export default (quizId: string) => dbConnection.query(
  `
    SELECT * FROM quizzes WHERE id = $1
  `,
  [quizId],
);
