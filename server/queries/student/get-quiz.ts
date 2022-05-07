import connections from '../../database/connections';

export default (id:String) => connections
  .query(
    'SELECT quizzes.*, teachers.username as teacher_name from quizzes join teachers on quizzes.teacher_id = teachers.id where quizzes.id = $1',
    [id],
  );
