import dbConnection from '../../database/connections';

export default (quizId: string) => dbConnection.query(
  `
    SELECT id FROM quizzes WHERE id = $1
  `,
  [quizId],
);
