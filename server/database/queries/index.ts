export { createNewUserQuery, checkEmailTakenQuery } from './auth';
export {
  createQuizQuery,
  createQuestionQuery,
  getEnrolledStudentsQuery,
  getMyQuizzes,
  deleteQuiz,
  userInfo,
} from './teacher';

export {
  addPrivateQuizScoreQuery,
  getQuizDetailsQuery,
  checkUserAttendQuizQuery,
  getStudentEmailQuery,
  getQuizQuery,
  getQuestionsQuery,
  getLeaderboardQuery,
  checkUserScoreQuery,
  updateScoreQuery,
  addScoreQuery,
} from './student';
