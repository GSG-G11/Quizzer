import dbConnection from '../../database/connections';

const createQuizQuery = ({
  quizId, teacherId, title, description, mark, time,
}) => dbConnection.query(
  `
    INSERT INTO quizzes (id, teacher_id, title, description, mark, time) VALUES
      ($1, $2, $3, $4, $5, $6)
      RETURNING *;
  `,
  [quizId, teacherId, title, description, mark, time],
);

const createQuestionQuery = ({
  quizId, question, type, answers,
}) => dbConnection.query(
  `
    INSERT INTO questions (quiz_id, question, type, answers) VALUES
      ($1, $2, $3, $4)
      RETURNING *;
  `,
  [quizId, question, type, answers],
);

export { createQuizQuery, createQuestionQuery };
