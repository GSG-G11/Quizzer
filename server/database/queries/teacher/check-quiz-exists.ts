import dbConnection from '../../config/connections';

export default (quizId: string) => dbConnection.query(
  `
    SELECT * FROM quizzes WHERE id = $1
  `,
  [quizId],
);
