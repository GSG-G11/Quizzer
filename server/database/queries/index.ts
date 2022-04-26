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
  createQuizQuery, createQuestionQuery, getMyQuizzes, deleteQuiz, checkDeletedQuiz,
} from './teacher';
