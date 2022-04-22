import connections from '../../config/connections';

const getQuiz = (id:String) => connections.query('select * from quizzes where id = $1', [id]);

export default getQuiz;
