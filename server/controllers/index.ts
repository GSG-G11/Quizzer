export {
  signup, login, logout, getUser,
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

export {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  getEnrolledStudents,
  getProfile,
  editProfile,
} from './teacher';
