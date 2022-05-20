import connections from '../../database/connections';

export default (studentId:number) => connections
  .query(
    'SELECT q.title, q.description, scores.student_score FROM scores JOIN quizzes AS q on scores.quiz_id = q.id WHERE student_id = $1',
    [studentId],
  );
