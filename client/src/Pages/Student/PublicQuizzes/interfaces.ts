interface IQuestions {
  category: string;
  id:string;
  correctAnswer:string;
  incorrectAnswers:string[];
  question:string;
  tags:string[];
  type:string;
  difficulty:string;
}

interface ICategory {
  category: string;
  miniDescription:string;
  description: string;
}

export { IQuestions, ICategory };
