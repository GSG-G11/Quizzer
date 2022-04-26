import connections from '../../config/connections';

const query = `select st.username, s.student_score, q.mark
from students as st 
join scores as s on st.id = s.student_id 
join quizzes as q on q.id = s.quiz_id JOIN teachers as t on t.id = q.teacher_id 
where q.id = $1 and t.id = $2`;

export default (quizId:String, teacherId:Number) => connections.query(query, [quizId, teacherId]);
