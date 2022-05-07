import connections from '../../database/connections';

export default (quizId: String, teacherId: Number) => connections
  .query('DELETE FROM quizzes WHERE id=$1 AND teacher_id = $2', [quizId, teacherId]);
