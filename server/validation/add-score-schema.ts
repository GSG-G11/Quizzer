import { string, number, object } from 'yup';

export default object({
  quizId: string().trim().length(18, 'quizId must be exactly 18 characters').required('QuizId can\'t be empty'),
  score: number().min(0, 'score must be 0 or greater').required('score is required'),
});
