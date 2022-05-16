import { Dispatch, SetStateAction } from 'react';

type TQuestionType = 'mcq' | 'short_answer' | 'true_false';

interface IQuestions extends Array<any> {
  question: string;
  answers: { answer: string; options: string[] };
  type: TQuestionType;
  id?: number;
  quiz_id?: 'string';
}

interface IQuestionCard {
  question: string;
  options: string[];
  setMsqAnswers: Dispatch<SetStateAction<{}>>;
  hasSubmitted: boolean;
  quizType: 'public' | 'private';
  questionType: TQuestionType;
}

type TQuiz = {
  description: string;
  id?: string;
  mark?:number
  questions: IQuestions;
  teacher_id?: string;
  teacher_name?: string;
  time?: number;
  title: string;
  type: 'public' | 'private';
};

interface ILocation {
  pathname: string;
  state: { quiz: TQuiz };
  search: string;
}
export {
  IQuestions, ILocation, IQuestionCard,
};
