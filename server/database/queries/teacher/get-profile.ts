import connections from '../../config/connections';

const quizzesInfo = (teacherId:Number) => connections
  .query(
    'SELECT q.title, q.description FROM quizzes AS q JOIN teachers AS t ON t.id = q.teacher_id WHERE t.id = $1',
    [teacherId],
  );

const userInfo = (teacherId:Number) => connections
  .query(
    'SELECT username, bio, avatar FROM teachers WHERE id = $1',
    [teacherId],
  );

export {
  quizzesInfo,
  userInfo,
};
