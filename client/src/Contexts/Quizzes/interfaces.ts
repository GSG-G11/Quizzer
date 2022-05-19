interface IQuizzes {
  [x: string]: any;
  [index: number]: {
  title: string;
  id: string;
  description: string | null;
  students_count: number;
}
  }

interface IQuizzesContext {
  quizzes: IQuizzes | null;
  setQuizzes: (quizzes: IQuizzes | null) => void
}

export { IQuizzes, IQuizzesContext };
