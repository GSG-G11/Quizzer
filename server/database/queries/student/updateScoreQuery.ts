import connections from '../../config/connections';

export default ({ studentId, score, quizTitle }) => connections
  .query(
    'update leaderboard set score = $1 where student_id = $2 and quiz_title = $3 RETURNING *',
    [score, studentId, quizTitle],
  );
