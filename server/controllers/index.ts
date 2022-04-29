export {
  signup, login, logout, getUser,
} from './auth';
export {
  sendEmail, getQuestions, getQuiz,
  addPrivateQuizScore, checkUserAttendQuiz, leaderboard,
} from './student';

export {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  getEnrolledStudents,
  getProfile,
} from './teacher';
