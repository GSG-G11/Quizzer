import { Dispatch, SetStateAction } from 'react';

type TQuestionType = 'mcq' | 'short_answer' | 'true_false';

interface IQuestion extends Array<any> {
  question: string;
  answers: { answer: string; options: string[] };
  type: TQuestionType;
  id?: number;
  quiz_id?: 'string';
}

interface IQuestions {
  questions: IQuestion[];
  answers: any;
  setAnswers: Dispatch<SetStateAction<any>>;
  hasSubmitted: boolean;
}

interface IQuestionCard {
  question: string;
  options: string[];
  setAnswers: Dispatch<SetStateAction<{}>>;
  hasSubmitted: boolean;
  questionType: TQuestionType;
  qNumber: number;
  answers:any;
}

type TQuiz = {
  description: string;
  id?: string;
  mark?:number
  questions: IQuestion;
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
  IQuestions, IQuestion, ILocation, IQuestionCard,
};
