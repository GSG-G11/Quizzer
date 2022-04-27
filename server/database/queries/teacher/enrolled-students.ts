import connections from '../../config/connections';

const query = `select student.username, score.student_score, quiz.mark
from students as student 
join scores as score on student.id = score.student_id 
join quizzes as quiz on quiz.id = score.quiz_id JOIN teachers as teacher on teacher.id = quiz.teacher_id 
where quiz.id = $1 and teacher.id = $2`;

export default (quizId:String, teacherId:Number) => connections.query(query, [quizId, teacherId]);
