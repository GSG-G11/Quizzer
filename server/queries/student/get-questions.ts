import connections from '../../database/connections';

export default (quizId) => connections
  .query(
    'SELECT * FROM questions WHERE quiz_id = $1',
    [quizId],
  );
