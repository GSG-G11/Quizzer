import connections from '../../config/connections';

export default (quizId: String, teacherId:Number) => connections
  .query('SELECT id FROM quizzes WHERE id=$1 AND teacher_id = $2', [quizId, teacherId]);
