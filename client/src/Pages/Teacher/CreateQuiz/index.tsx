import React, {
  useState, useEffect, useMemo, createContext,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, Button, Stack,
} from '../../../mui';
import { CreateQuizForm, QuestionFormWrapper } from '../../../Components';
import { useSnackBar } from '../../../Hooks';

const initialValues: any = {
  title: '',
  description: '',
  questionsNumber: '',
  time: '',
  mark: 0,
  questions: [],
};

export const QuizContext = createContext<any>(null!);

function CreateQuiz() {
  const [quiz, setQuiz] = useState<any>(initialValues);
  const [questionType, setQuestionType] = useState<'mcq' | 'true_false' | 'short_answer'>('mcq');
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();

  useEffect(() => {
    const addQuiz = async () => {
      try {
        const { data: { data } }: any = await axios.post('/api/v1/teacher/quiz', quiz);
        const quizId = data.quiz.id;
        navigate('/teacher');
        showSnackBar(`Quiz created successfully, Quiz Code: ${quizId}`, 'success');
      } catch (err: any) {
        if (err.response.status === 500) navigate('/error');
        else showSnackBar(err.response.data.message, 'error');
      }
    };

    if (quiz.questionsNumber === quiz.questions.length && quiz.mark > 0) addQuiz();
  }, [quiz]);

  const getOptions = (data: any, number: number) => {
    const questionOptions: any = [];
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith(`q-${number}`)) questionOptions.push(value);
    });
    return questionOptions;
  };

  const handleSubmit = (values: any) => setQuiz({ ...quiz, ...values });

  const createNewQuiz = (e: any) => {
    e.preventDefault();
    const data: any = Object.fromEntries(new FormData(e.target as any));
    const questionValues: string[] = Object.values(data);
    for (let i = 0; i < questionValues.length; i += 1) {
      if (questionValues[i].trim() === '') {
        showSnackBar('Please fill all the fields', 'error');
        return;
      }
    }

    const questions = [];
    for (let i = 1; i <= quiz.questionsNumber; i += 1) {
      const type = data[`question-${i}-type`];
      questions.push({
        question: data[`question-${i}`],
        type,
        answers: {
          answer: type === 'mcq'
            ? data[data[`question-${i}-answer`]] : type === 'true_false' ? data[`question-${i}-answer`] === 'true' : data[`question-${i}-answer`],
          options: type === 'short_answer' ? [] : type === 'true_false' ? [true, false] : getOptions(data, i),
        },
      });
    }
    setQuiz({ ...quiz, questions, mark: questions.length });
  };

  const memoizedQuiz = useMemo(
    () => (
      {
        quiz,
        setQuiz,
        questionType,
        setQuestionType,
      }
    ),
    [quiz, questionType],
  );

  return (
    <QuizContext.Provider value={memoizedQuiz}>
      <Container>
        <form onSubmit={createNewQuiz}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary.dark"
            textAlign="center"
            marginTop="2rem"
            gutterBottom
          >
            Create a new Quiz
          </Typography>
          {!quiz.title && <CreateQuizForm onSubmit={handleSubmit} />}
          {
        quiz.title
         && [...Array(quiz.questionsNumber).keys()]
           .map((num) => <QuestionFormWrapper key={num} number={num} />)
        }
          {quiz.title && (
          <Stack
            direction="row"
            justifyContent="space-between"
            style={{ marginBlock: '2rem' }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={() => {
                setQuiz((prev: any) => ({ ...prev, questionsNumber: prev.questionsNumber + 1 }));
              }}
            >
              Add Question
            </Button>
            <Button
              type="submit"
              variant="contained"
            >
              Create Quiz
            </Button>
          </Stack>
          )}
        </form>
      </Container>
    </QuizContext.Provider>
  );
}

export default CreateQuiz;
