export { createNewUserQuery, checkEmailTakenQuery } from './auth';

export {
  addPrivateQuizScoreQuery,
  getQuizDetailsQuery,
  checkUserAttendQuizQuery,
  getStudentEmailQuery,
  getQuizQuery,
  getQuestionsQuery,
  getLeaderboardQuery,
} from './student';

export {
  deleteQuiz,
} from './teacher';
export { createQuizQuery, createQuestionQuery, getMyQuizzes } from './teacher';
