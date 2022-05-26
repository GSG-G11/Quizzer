/* eslint-disable no-plusplus */
import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import {
  Container, Typography, Button, Stack,
} from '../../../mui';
import { CreateQuizForm, QuestionFormWrapper } from '../../../Components';
import { useBlocker, useSnackBar } from '../../../Hooks';
import { copyToClipboard } from '../../../Utils';
import { IQuiz, IQuizContext } from './interfaces';
import classes from './CreateQuiz.module.css';

const quizInitialValues: IQuiz = {
  title: '',
  description: '',
  time: 0,
  mark: 0,
  questions: [],
};

export const QuizContext = createContext<IQuizContext | null>(null!);
let questionsCounter = 1;

function CreateQuiz() {
  const [allowNavigate, setAllowNavigate] = useState<boolean>(false);
  const [quiz, setQuiz] = useState<IQuiz>(quizInitialValues);
  const [questionsNumberArray, setQuestionsNumberArray] = useState<number[]>([0, 1]);
  const [questionType, setQuestionType] = useState<'mcq' | 'true_false' | 'short_answer'>('mcq');
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();
  const confirm = useConfirm();

  const confirmRefresh = (e: any) => {
    e.preventDefault();
    e.returnValue = 'Changes you made will be unsaved!';
    return e;
  };

  const confirmNavigation = async () => {
    await confirm({ description: 'That by submitting this, your progress will be unsaved!', title: 'Be Aware' });
    setAllowNavigate(true);
  };

  useBlocker(async () => {
    await confirmNavigation();
    navigate('/teacher/');
  }, !allowNavigate);

  useEffect(() => {
    window.addEventListener('beforeunload', confirmRefresh, { capture: true });
    return () => window.removeEventListener('beforeunload', confirmRefresh, { capture: true });
  }, []);

  useEffect(() => {
    const addQuiz = async () => {
      try {
        const { data: { data } }: any = await axios.post('/api/v1/teacher/quiz', quiz);
        const quizId = data.quiz.id;
        navigate('/teacher/');
        copyToClipboard({ str: quizId });
        showSnackBar('Quiz created successfully, Quiz code copied to your clipboard', 'success');
      } catch (err: any) {
        if (err.response.status === 500) navigate('/error');
        else showSnackBar(err.response.data.message, 'error');
      }
    };

    if (questionsNumberArray.length === quiz.questions.length && quiz.mark > 0) addQuiz();
  }, [quiz]);

  const getOptions = (data: any, number: number) => {
    const questionOptions: any = [];
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith(`q-${number}`)) questionOptions.push(value);
    });
    return questionOptions;
  };

  const handleSubmit = (values: any) => setQuiz({ ...quiz, ...values });

  const createNewQuiz = async (e: any) => {
    e.preventDefault();
    await confirm({ title: 'Confirm Submission', description: 'Are you sure that you want to finish creating the quiz?' });
    setAllowNavigate(true);
    const data: any = Object.fromEntries(new FormData(e.target as any));
    const questionValues: string[] = Object.values(data);
    for (let i = 0; i < questionValues.length; i += 1) {
      if (questionValues[i].trim() === '') {
        showSnackBar('Please fill all the fields', 'error');
        return;
      }
    }

    const questions = questionsNumberArray.map((ele) => {
      const i = ele + 1;
      const type = data[`question-${i}-type`];

      return {
        question: data[`question-${i}`],
        type,
        answers: {
          answer: type === 'mcq'
            ? data[data[`question-${i}-answer`]] : type === 'true_false' ? data[`question-${i}-answer`] === 'true' : data[`question-${i}-answer`],
          options: type === 'short_answer' ? [] : type === 'true_false' ? [true, false] : getOptions(data, i),
        },
      };
    });

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
        <form onSubmit={createNewQuiz}>
          {
          quiz.title
          && questionsNumberArray.map((num) => (
            <QuestionFormWrapper
              key={num}
              number={num}
              questionsNumberArray={questionsNumberArray}
              setQuestionsNumberArray={setQuestionsNumberArray}
            />
          ))
        }
          {quiz.title && (
          <Stack
            direction="row"
            justifyContent="space-between"
            style={{ marginBlock: '2rem' }}
          >
            <Button
              size="large"
              type="button"
              variant="outlined"
              onClick={() => {
                setQuestionsNumberArray((prev) => ([...prev, ++questionsCounter]));
                window.setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 10);
              }}
            >
              Add Question
            </Button>
            <Button
              className={classes.btn}
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
