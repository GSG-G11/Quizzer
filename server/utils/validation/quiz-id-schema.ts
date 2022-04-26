import {
  string, object,
} from 'yup';

export default object({
  quizId: string().length(18, 'Must be exactly 18 characters').required('QuizId can\'t be empty'),
});
