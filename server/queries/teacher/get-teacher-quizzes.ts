import connections from '../../database/connections';

export default (teacherId:Number) => connections
  .query(
    'SELECT q.title, q.id, q.description,(SELECT COUNT(*) FROM scores WHERE scores.quiz_id = q.id) AS students_count FROM quizzes AS q JOIN teachers AS t ON t.id = q.teacher_id WHERE t.id = $1',
    [teacherId],
  );
