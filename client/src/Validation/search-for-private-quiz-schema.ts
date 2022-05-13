import { object, string } from 'yup';

export default object({
  quizId: string().length(18, 'Quiz code must be 18 characters long').required('Quiz code is required'),
});
