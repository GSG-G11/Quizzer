-- select st.username,
--   s.student_score,
--   q.quiz_mark,
--   q.title
-- from students as st
--   join scores as s on st.id = s.student_id
--   join quizzes as q on q.id = s.quiz_id
--   JOIN teachers as t on t.id = q.teacher_id
-- where q.id = 'quiz-1'
--   and t.id = 1;

-- SELECT st.username, board.score from leaderboard as board join students as st on board.student_id = st.id where board.quiz_title = 'Food & Drink'

-- delete from leaderboard where student_id = 2 and quiz_title = 'Food & Drink';

-- select quiz_title, student_id from leaderboard where student_id = 2 and quiz_title = 'Food & Drink';
-- insert into leaderboard (quiz_title, student_id, score) values ('Food & Drink', 2, 9)

-- update leaderboard set score = 9 where student_id = 1 and quiz_title = 'Food & Drink' RETURNING *;

SELECT ques.question as question,
  ques.type as question_type,
  ques.answers as answers,
  quiz.title as quiz_title,
  quiz.quiz_mark as quiz_mark,
  quiz.time AS quiz_time
FROM questions as ques
  JOIN quizzes as quiz ON ques.quiz_id = quiz.id
  JOIN scores ON quiz.id = scores.quiz_id
WHERE scores.student_id = 1
  AND scores.quiz_id = 'quiz-1';