export { createNewUserQuery, checkEmailTakenQuery } from './auth';
export {
  createQuizQuery,
  createQuestionQuery,
  checkQuizExistsQuery,
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
} from './student';
