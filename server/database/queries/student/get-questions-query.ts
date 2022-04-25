import connections from '../../config/connections';

export default ({ userId: studentId, quizId }) => connections
  .query(
    'SELECT ques.question as question, ques.type as question_type, ques.answers as answers, quiz.title as quiz_title, quiz.mark as quiz_mark, quiz.time AS quiz_time FROM questions as ques JOIN quizzes as quiz ON ques.quiz_id = quiz.id JOIN scores ON quiz.id = scores.quiz_id WHERE scores.student_id =$1 AND scores.quiz_id = $2;',
    [studentId, quizId],
  );
