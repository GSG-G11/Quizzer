import {
  string, object,
} from 'yup';

export default object({
  quizId: string().min(17, 'Must be exactly 17 characters').max(17, 'Must be exactly 17 characters').required('QuizId can\'t be empty'),
});
