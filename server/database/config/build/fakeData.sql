INSERT INTO students (username, email, password, bio, avatar)
VALUES (
    'Zaher',
    'zaherabuamro@gmail.com',
    'zaher123',
    'zaher-aa'
  ),
  (
    'Khaled',
    'khaled@gmail.com',
    'khaled123',
    'khaled'
  ),
  ('Amjad', 'amjad@gmail.com', 'amjad123', 'amjad');
INSERT INTO teachers (username, email, password, bio, avatar)
VALUES ('Ahmed', 'ahmad@gmail.com', 'ahmad123', 'ahmad'),
  (
    'Mohamed',
    'mohamed@gmail.com',
    'mohamed123',
    'mohamed'
  ),
  ('Ali', 'ali@gmail.com', 'ali123', 'ali');
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
INSERT INTO scores (quiz_id, user_id, student_score)
VALUES ('quiz-1', 'user-1', '10'),
  ('quiz-1', 'user-2', '10'),
  ('quiz-1', 'user-3', '8'),
  ('quiz-1', 'user-4', '10'),
  ('quiz-1', 'user-5', '9'),
  ('quiz-1', 'user-6', '10'),
  ('quiz-1', 'user-7', '10'),
  ('quiz-1', 'user-8', '5'),
  ('quiz-1', 'user-9', '10'),
  ('quiz-1', 'user-10', '10'),
  ('quiz-2', 'user-1', '10'),
  ('quiz-2', 'user-2', '7'),
  ('quiz-2', 'user-3', '10'),
  ('quiz-2', 'user-4', '6'),
  ('quiz-2', 'user-5', '9'),
  ('quiz-2', 'user-6', '1'),
  ('quiz-2', 'user-7', '10'),
  ('quiz-2', 'user-8', '8'),
  ('quiz-2', 'user-9', '10'),
  ('quiz-2', 'user-10', '0'),
  ('quiz-3', 'user-1', '10'),
  ('quiz-3', 'user-2', '8'),
  ('quiz-3', 'user-3', '10'),
  ('quiz-3', 'user-4', '3'),
  ('quiz-3', 'user-5', '10'),
  ('quiz-3', 'user-6', '10'),
  ('quiz-3', 'user-7', '2'),
  ('quiz-3', 'user-8', '10'),
  ('quiz-3', 'user-9', '6'),
  ('quiz-3', 'user-10', '10');
INSERT INTO leaderboard (quiz_title, mark, students)
VALUES (
    'Arts & Literature',
    '10',
    '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
  ),
  (
    'Film & TV',
    '10',
    '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
  ),
  (
    'Food & Drink',
    '10',
    '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
  );
(
  'General Knowledge',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
);
(
  'Geopraphy',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
);
(
  'History',
  '10',
  '{"user-1", "user-2", "user-3", "user-4", "user-5", "user-6", "user-7", "user-8", "user-9", "user-10"}'
);
(
  'Music',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
);
(
  'Science',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
);
(
  'Society & Culture',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
);
(
  'Sport & Leisure',
  '10',
  '[{username:amjad, id:1, score:5}, {username:ahmad, id:2, score:6}, {username:zaher, id:3, score:4}, {username:ali, id:4, score:3},{username:khaled, id:5, score:1}, {username:noor, id:6, score:7}]'
)