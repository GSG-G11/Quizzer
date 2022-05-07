import dbConnection from '../../database/connections';

export default ({ userId: studentId, quizId }) => dbConnection.query(
  `
    SELECT * FROM scores WHERE student_id = $1 AND quiz_id = $2
  `,
  [studentId, quizId],
);
