import { IQuizzes } from '../../../Contexts/Quizzes/interfaces';

interface IDeleteModal {
  deleteModal: boolean;
  setDeleteModal: (deleteModal: boolean) => void;
  currentQuizId: string;
  quizzes: any;
}

interface IQuiz {
  [index: number] : string
  title: string
  id: string
  description: string
  students_count: number
}

interface ITableQuizzes {
  quizzes: IQuizzes | null;
  headers: string[];
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (page: number) => void;
}

interface ITableBody {
  quizzes: any;
  headers: string[];
  page: number;
  rowsPerPage: number;
}

export {
  IDeleteModal, IQuiz, ITableQuizzes, ITableBody,
};
