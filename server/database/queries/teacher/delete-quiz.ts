import connections from '../../config/connections';

export default (quizId:String) => connections
  .query('DELETE FROM quizzes WHERE id=$1', [quizId]);
