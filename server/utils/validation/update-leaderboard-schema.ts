import { number, object, string } from 'yup';

const quizzesTitles = [
  'Music',
  'Science',
  'Film & TV',
  'Food & Drink',
  'General Knowledge',
  'Geography',
  'Society & Culture',
  'Science',
  'Sport & Leisure',
];

export default object({
  quizTitle: string().oneOf(quizzesTitles).required('a valid Quiz title is required'),
  score: number().min(0, 'score must be greater than 0').max(10, 'score must be less than 10').required('score is required'),
});
