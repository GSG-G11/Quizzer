export {
  signup, login, logOut, getUser,
} from './auth';
export {
  sendEmail, getQuestions, getQuiz,
  addPrivateQuizScore, checkUserAttendQuiz, leaderboard,
} from './student';

export {
  createQuiz, deleteQuiz, getQuizzes, getEnrolledStudents,
} from './teacher';
