import connections from '../../database/connections';

const sql = `
INSERT INTO leaderboard (quiz_title, student_id, score) VALUES ($1, $2, $3) 
ON CONFLICT ON CONSTRAINT leaderboard_pkey 
DO UPDATE SET score = 
  CASE EXCLUDED.score > leaderboard.score
      WHEN true THEN EXCLUDED.score
      ELSE leaderboard.score
  END
  WHERE leaderboard.quiz_title = EXCLUDED.quiz_title
  AND leaderboard.student_id = EXCLUDED.student_id
  RETURNING *`;

export default ({ quizTitle, studentId, score }) => connections
  .query(sql, [quizTitle, studentId, score]);
