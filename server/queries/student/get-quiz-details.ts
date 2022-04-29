import dbConnection from '../../database/connections';

export default (quizId: string) => dbConnection.query(
  `
    SELECT t.username AS teacher_name, t.bio AS teacher_bio, q.title AS quiz_title,
    q.description AS quiz_description, q.mark AS quiz_mark, q.time AS quiz_duration
    FROM teachers AS t JOIN quizzes AS q ON t.id = q.teacher_id
    WHERE q.id = $1
  `,
  [quizId],
);
