interface IAnswer {
  answer: string | boolean;
  options?: string[] | boolean[] | [];
}

interface IQuestion {
  question: string;
  type: 'mcq' | 'true_false' | 'short_answer';
  answers: IAnswer;
}

interface IQuiz {
  title: string;
  description: string;
  time: number;
  mark: number;
  questions: IQuestion[];
}

interface IQuizContext {
  quiz: IQuiz;
  setQuiz: (quiz: IQuiz) => void;
  questionType: 'mcq' | 'true_false' | 'short_answer';
  setQuestionType: (type: 'mcq' | 'true_false' | 'short_answer') => void;
}

export {
  IQuizContext,
  IQuiz,
  IQuestion,
  IAnswer,
};
