import connections from '../../config/connections';

export default (studentId:Number, quizTitle: String) => connections.query(
  'select * from leaderboard where student_id = $1 and quiz_title = $2',
  [studentId, quizTitle],
);
