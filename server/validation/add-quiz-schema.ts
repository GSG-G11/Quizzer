import {
  array, number, object, string,
} from 'yup';

export default object({
  title: string().required('A quiz mush have a title'),
  description: string().required('Quiz description is required'),
  mark: number().required('Quiz mark is required'),
  time: number().required('Quiz duration must be specified'),
  questions: array().of(
    object({
      question: string().required('Question is not allowed to be empty'),
      type: string().oneOf(['mcq', 'short_answer', 'true_false'], 'Question type must be either MCQ, Short Answer, or True/False').required('Question type must be specified'),
      answers: object({
        answer: string().required('Correct answer is required'),
        options: array().required('options are required'),
      }),
    }),
  ).required('Questions can\'t be empty'),
});
