INSERT INTO students (username, email, password, bio, avatar)
VALUES (
    'Zaher',
    'zaherabuamro@gmail.com',
    'zaher123',
    'zaher-aa',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  ),
  (
    'Khaled',
    'khaled@gmail.com',
    'khaled123',
    'khaled',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  ),
  (
    'Amjad',
    'amjad@gmail.com',
    'amjad123',
    'amjad',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  );
INSERT INTO teachers (username, email, password, bio, avatar)
VALUES (
    'Ahmed',
    'ahmad@gmail.com',
    'ahmad123',
    'ahmad',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  ),
  (
    'Mohamed',
    'mohamed@gmail.com',
    'mohamed123',
    'mohamed',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  ),
  (
    'Ali',
    'ali@gmail.com',
    'ali123',
    'ali',
    'https://res.cloudinary.com/dzqb0zjqw/image/upload/v1589735981/avatar_zqxqjy.jpg'
  );
INSERT INTO quizzes (
    id,
    teacher_id,
    title,
    description,
    quiz_mark,
    time
  )
VALUES ('quiz-1', 1, 'Quiz 1', 'This is quiz 1', 10, 5),
  ('quiz-2', 2, 'Quiz 2', 'This is quiz 2', 10, 5),
  ('quiz-3', 3, 'Quiz 3', 'This is quiz 3', 10, 5),
  ('quiz-4', 1, 'Quiz 4', 'This is quiz 4', 10, 5),
  ('quiz-5', 2, 'Quiz 5', 'This is quiz 5', 10, 5),
  ('quiz-6', 3, 'Quiz 6', 'This is quiz 6', 10, 5),
  ('quiz-7', 1, 'Quiz 7', 'This is quiz 7', 10, 5),
  ('quiz-8', 2, 'Quiz 8', 'This is quiz 8', 10, 5),
  ('quiz-9', 3, 'Quiz 9', 'This is quiz 9', 10, 5),
  (
    'quiz-10',
    1,
    'Quiz 10',
    'This is quiz 10',
    10,
    5
  ),
  (
    'quiz-11',
    2,
    'Quiz 11',
    'This is quiz 11',
    10,
    5
  ),
  (
    'quiz-12',
    3,
    'Quiz 12',
    'This is quiz 12',
    10,
    5
  ),
  (
    'quiz-13',
    1,
    'Quiz 13',
    'This is quiz 13',
    10,
    5
  ),
  (
    'quiz-14',
    2,
    'Quiz 14',
    'This is quiz 14',
    10,
    5
  ),
  (
    'quiz-15',
    3,
    'Quiz 15',
    'This is quiz 15',
    10,
    5
  ),
  (
    'quiz-16',
    1,
    'Quiz 16',
    'This is quiz 16',
    10,
    5
  ),
  (
    'quiz-17',
    2,
    'Quiz 17',
    'This is quiz 17',
    10,
    5
  ),
  (
    'quiz-18',
    3,
    'Quiz 18',
    'This is quiz 18',
    10,
    5
  ),
  (
    'quiz-19',
    1,
    'Quiz 19',
    'This is quiz 19',
    10,
    5
  ),
  (
    'quiz-20',
    2,
    'Quiz 20',
    'This is quiz 20',
    10,
    5
  ),
  (
    'quiz-21',
    3,
    'Quiz 21',
    'This is quiz 21',
    10,
    5
  ),
  (
    'quiz-22',
    1,
    'Quiz 22',
    'This is quiz 22',
    10,
    5
  ),
  (
    'quiz-23',
    2,
    'Quiz 23',
    'This is quiz 23',
    10,
    5
  ),
  (
    'quiz-24',
    3,
    'Quiz 24',
    'This is quiz 24',
    10,
    5
  ),
  (
    'quiz-25',
    1,
    'Quiz 25',
    'This is quiz 25',
    10,
    5
  ),
  (
    'quiz-26',
    2,
    'Quiz 26',
    'This is quiz 26',
    10,
    5
  ),
  (
    'quiz-27',
    3,
    'Quiz 27',
    'This is quiz 27',
    10,
    5
  );
INSERT INTO questions (quiz_id, question, type, answers)
VALUES (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-1',
    'do you love me?',
    'true_false',
    '{"answer": true, "options": [true, false]}'
  ),
  (
    'quiz-1',
    'do you love me?',
    'true_false',
    '{"answer": false, "options": [true, false]}'
  ),
  (
    'quiz-1',
    'do you love me?',
    'true_false',
    '{"answer": true, "options": [true, false]}'
  ),
  (
    'quiz-1',
    'do you love me?',
    'true_false',
    '{"answer": false, "options": [true, false]}'
  ),
  (
    'quiz-1',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-1',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-1',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-2',
    'do you love me?',
    'true_false',
    '{"answer": true, "options": [true, false]}'
  ),
  (
    'quiz-2',
    'do you love me?',
    'true_false',
    '{"answer": false, "options": [true, false]}'
  ),
  (
    'quiz-2',
    'do you love me?',
    'true_false',
    '{"answer": true, "options": [true, false]}'
  ),
  (
    'quiz-2',
    'do you love me?',
    'true_false',
    '{"answer": false, "options": [true, false]}'
  ),
  (
    'quiz-2',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-2',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-2',
    'whats my name',
    'short_answer',
    '{"answer": "Zaher", "options": []}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  ),
  (
    'quiz-3',
    'What is the capital of Egypt?',
    'mcq',
    '{"answer": "Cairo", "options": ["Cairo", "Alexandria", "Luxor", "Aswan"]}'
  );
INSERT INTO scores (quiz_id, student_id, student_score)
VALUES ('quiz-1', 1, '10'),
  ('quiz-1', 2, '10'),
  ('quiz-1', 3, '9'),
  ('quiz-2', 1, '10'),
  ('quiz-2', 2, '7'),
  ('quiz-2', 3, '10'),
  ('quiz-3', 1, '10'),
  ('quiz-3', 2, '8'),
  ('quiz-3', 3, '10');
INSERT INTO leaderboard (quiz_title, mark, students)
VALUES (
    'Arts & Literature',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
  (
    'Film & TV',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
  (
    'Food & Drink',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
  (
    'General Knowledge',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":8},{"username":"user-4","score":10},{"username":"user-5","score":9},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":5},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
  (
    'Geography',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
  (
    'Histoy',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
(
    'Music',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
(
    'Science',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
(
    'Society & Culture',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  ),
(
    'Sport & Leisure',
    '10',
    '[{"username":"user-1","score":10},{"username":"user-2","score":10},{"username":"user-3","score":10},{"username":"user-4","score":10},{"username":"user-5","score":10},{"username":"user-6","score":10},{"username":"user-7","score":10},{"username":"user-8","score":10},{"username":"user-9","score":10},{"username":"user-10","score":10}]'
  )