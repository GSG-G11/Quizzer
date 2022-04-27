export {
  signup, login, logOut, getUser,
} from './auth';
export {
  sendEmail,
  getQuestions,
  getQuiz,
  addPrivateQuizScore,
  checkUserAttendQuiz,
  leaderboard,
  updateLeaderboard,
} from './student';

export { createQuiz, deleteQuiz, getQuizzes } from './teacher';
