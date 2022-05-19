import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IQuizzes, IQuizzesContext } from './interfaces';

export const QuizzesContext = createContext<IQuizzesContext>(null!);

function QuizzesProvider({ children }: { children: ReactNode }) {
  const [quizzes, setQuizzes] = useState<IQuizzes | null>([]);
  const navigate = useNavigate();

  const getQuizzes = async () => {
    try {
      const { data: { data: myQuizzes } } = await axios.get('/api/v1/teacher/quizzes');
      setQuizzes(myQuizzes.reverse());
    } catch (err: any) {
      if (err.response.status === 500) navigate('/error');
    }
  };

  useEffect(() => {
    try {
      getQuizzes();
    } catch (err) {
      setQuizzes([]);
    }
  }, []);

  const memoizedQuizzes = useMemo(
    () => ({
      quizzes,
      setQuizzes,
    }),
    [quizzes],
  );

  return (
    <QuizzesContext.Provider value={memoizedQuizzes}>{children}</QuizzesContext.Provider>
  );
}

export default QuizzesProvider;
