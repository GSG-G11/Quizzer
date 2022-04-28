export { createNewUserQuery, checkEmailTakenQuery } from './auth';

export {
  createQuizQuery,
  createQuestionQuery,
  userInfo,
  getMyQuizzes,
  deleteQuiz,
  checkQuizExistsQuery,
} from './teacher';

export {
  addPrivateQuizScoreQuery,
  getQuizDetailsQuery,
  checkUserAttendQuizQuery,
  getStudentEmailQuery,
  getQuizQuery,
  getQuestionsQuery,
  getLeaderboardQuery,
} from './student';
