export {
  successSignup,
  takenEmail,
  invalidPassword,
  invalidUsername,
  invalidAvatar,
} from './signup-models';

export {
  successStdLogin,
  successTechLogin,
  incorrectEmail,
  incorrectPassword,
  invalidUserPassword,
} from './login-models';

export { default as quizQuestions } from './questions';
export { default as successReturnData } from './quizzes-models';
export { default as studentQuizzes } from './student-quizzes-modal';

export {
  validQuiz,
  noTitleQuiz,
  noDescriptionQuiz,
  noMarkQuiz,
  noTimeQuiz,
  noQuestionsQuiz,
  noQuestionQuiz,
  noQuestionAnswerTypeQuiz,
  invalidQuestionType,
  noAnswersQuestion,
  noAnswerQuestion,
  noOptions,
  invalidTrueFalseAnswers,
} from './quiz-models';

export {
  teacherInfoSuccessEdited,
  teacherImageError,
  teacherNameError,
} from './teacher-profile-edited';

export {
  studentInfoSuccessEdited,
  studentImageError,
  studentNameError,
} from './student-profile.edited';
