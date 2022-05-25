export {
  createNewUserQuery,
  checkEmailTakenQuery,
  verifyAccount,
  createHash,
  deleteHash,
} from './auth';
export {
  createQuizQuery,
  createQuestionQuery,
  checkQuizExistsQuery,
  getEnrolledStudentsQuery,
  getMyQuizzes,
  deleteQuiz,
  userInfo,
  editTeacherProfile,
} from './teacher';

export {
  addPrivateQuizScoreQuery,
  getQuizDetailsQuery,
  checkUserAttendQuizQuery,
  getStudentEmailQuery,
  getQuizQuery,
  getQuestionsQuery,
  getLeaderboardQuery,
  updateLeaderboardQuery,
  getStdProfile,
  editStdProfile,
  getPublicQuizzes,
} from './student';
