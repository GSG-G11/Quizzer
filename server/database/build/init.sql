BEGIN;

DROP TABLE IF EXISTS students, teachers, quizzes, questions, scores, leaderboard, teachers_hashes, students_hashes CASCADE;
DROP TYPE IF EXISTS quiz_type;

CREATE TYPE quiz_type AS ENUM('mcq', 'true_false', 'short_answer');

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  bio TEXT,
  avatar TEXT
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  bio TEXT,
  avatar TEXT
);

CREATE TABLE teachers_hashes (
  user_id INTEGER PRIMARY KEY,
  hash TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES teachers (id) ON DELETE CASCADE
);

CREATE TABLE students_hashes (
  user_id INTEGER PRIMARY KEY,
  hash TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES students (id) ON DELETE CASCADE
);

CREATE TABLE quizzes (
  id VARCHAR(50) PRIMARY KEY,
  teacher_id INTEGER,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  mark INTEGER NOT NULL,
  time INTEGER DEFAULT 5,
  FOREIGN KEY (teacher_id) REFERENCES teachers (id) ON DELETE CASCADE
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  quiz_id VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  type quiz_type NOT NULL,
  answers JSON NOT NULL,
  FOREIGN KEY (quiz_id) REFERENCES quizzes (id) on DELETE CASCADE
);

CREATE TABLE scores (
  student_id INTEGER NOT NULL,
  quiz_id VARCHAR(50) NOT NULL,
  student_score INTEGER NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students (id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_id) REFERENCES quizzes (id) ON DELETE CASCADE,
  PRIMARY KEY (student_id, quiz_id)
);

CREATE TABLE leaderboard (
  quiz_title VARCHAR(50),
  student_id INT,
  score INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students (id) ON DELETE CASCADE,
  PRIMARY KEY(student_id, quiz_title)
);

COMMIT;