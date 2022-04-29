import connections from '../../database/connections';

const query = `select students.username, scores.student_score, quizzes.mark
from students
join scores on students.id = scores.student_id 
join quizzes on quizzes.id = scores.quiz_id JOIN teachers on teachers.id = quizzes.teacher_id 
where quizzes.id = $1 and teachers.id = $2`;

export default (quizId:String, teacherId:Number) => connections.query(query, [quizId, teacherId]);
