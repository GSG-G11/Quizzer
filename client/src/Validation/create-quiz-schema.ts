import { object, string, number } from 'yup';

export default object({
  title: string().trim().required('Quiz title is required'),
  description: string().trim().required('Quiz description is required'),
  time: number().min(1, 'Quiz duration must be at least 1 minute').required('Quiz duration is required'),
  questionsNumber: number().min(1, 'Quiz must have at least 1 question').max(100, 'Maximum number of questions is 100').required('Quiz must have at least 1 question'),
});
