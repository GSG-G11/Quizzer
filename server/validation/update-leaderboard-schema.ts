import { number, object, string } from 'yup';

const quizzesTitles = [
  'Music',
  'Science',
  'Film & TV',
  'Food & Drink',
  'General Knowledge',
  'Geography',
  'Society & Culture',
  'History',
  'Sport & Leisure',
  'Arts & Literature',
];

export default object({
  quizTitle: string().trim().oneOf(quizzesTitles).required('a valid Quiz title is required'),
  score: number().min(0, 'score must be 0 or greater').max(10, 'score must be 10 or less').required('score is required'),
});
