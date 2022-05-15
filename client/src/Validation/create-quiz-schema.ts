import { object, string, number } from 'yup';

export default object({
  title: string().required('Quiz title is required'),
  description: string().required('Quiz description is required'),
  time: number().min(1, 'Quiz duration must be at least 1 minute').required('Quiz duration is required'),
});
