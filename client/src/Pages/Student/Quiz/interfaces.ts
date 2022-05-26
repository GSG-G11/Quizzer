import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type TQuestionType = 'mcq' | 'short_answer' | 'true_false' | string;

interface IQuestion {
  question: string;
  answers: { answer: string; options: string[] };
  type: TQuestionType;
  id: string;
  quiz_id?: string;
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
  answers: any;
}

interface IQuestionInput {
  hasSubmitted: boolean;
  option?: string | boolean;
  questionType: TQuestionType;
  handleShortAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  question: string;
  answers: any;
  key?: string;
}

interface IQuiz {
  id: string;
  mark: number;
  questions: IQuestion[];
  teacher_id?: string;
  teacher_name: string;
  time: number;
  title: string;
  type: 'public' | 'private' | string;
}

interface IApiPublicQuestions {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
}

type THasPressedSubmitBtn = { hasPressedSubmitBtn: boolean };

export {
  IQuestions,
  IQuestion,
  IQuestionCard,
  IQuestionInput,
  IApiPublicQuestions,
  IQuiz,
  THasPressedSubmitBtn,
};
