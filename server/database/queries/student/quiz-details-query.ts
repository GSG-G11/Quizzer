import connections from '../../config/connections';

export default (id:String) => connections
  .query(
    'SELECT questions.*, quizzes.title AS quiz_title, quizzes.quiz_mark, quizzes.time AS quiz_time FROM questions JOIN quizzes ON questions.quiz_id = quizzes.id WHERE quiz_id = $1',
    [id],
  );
