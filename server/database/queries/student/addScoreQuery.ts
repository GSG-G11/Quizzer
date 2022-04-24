import connections from '../../config/connections';

export default ({ studentId, quizTitle, score }) => connections
  .query(
    'insert into leaderboard (quiz_title, student_id, score) values ($1, $2, $3) returning *',
    [quizTitle, studentId, score],
  );
