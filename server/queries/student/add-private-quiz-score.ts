import dbConnection from '../../database/connections';

export default ({ userId: studentId, quizId, score }) => dbConnection.query(
  `
  INSERT INTO scores (student_id, quiz_id, student_score) VALUES
    ($1, $2, $3)
    RETURNING *
  `,
  [studentId, quizId, score],
);
