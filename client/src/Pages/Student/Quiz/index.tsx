/* eslint-disable max-len */
import LinearProgress from '@mui/material/LinearProgress';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import axios from 'axios';
import { Questions } from '../../../Components/Student';
import {
  Typography, Grid, Button, Container, Icon, TimerIcon,
} from '../../../mui';
import {
  IQuestion, IQuiz, THasPressedSubmitBtn,
} from './interfaces';
import classes from './Quiz.module.css';
import { useBlocker, useSnackBar, useAuth } from '../../../Hooks';
import { formatPublicQuestions, timer } from '../../../Utils';
import { QuizSkeleton } from '../../../Components';

const initQuiz = {
  id: '',
  mark: 0,
  questions: [{
    question: '', answers: { answer: '', options: [''] }, type: 'mcq', id: '', quiz_id: '',
  }],
  teacher_id: '',
  teacher_name: '',
  time: 0,
  title: '',
  type: 'public',
};

function Quiz() {
  const [quiz, setQuiz] = useState<IQuiz>(initQuiz);
  const [answers, setAnswers] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [examTime, setExamTime] = useState({ minutes: 0, seconds: 0 });
  let { current: score } = useRef(0);
  const { showSnackBar } = useSnackBar();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirm = useConfirm();
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(false);

  const fetchQuiz = async () => {
    setLoading(true);
    const type = searchParams.get('type') as 'public' | 'private';
    const quizId = searchParams.get('id') as string;
    let questionsUrl = '';

    if (type === 'public') {
      questionsUrl = `https://the-trivia-api.com/api/questions?categories=${quizId}&limit=10`;
      const { data } = await axios.get(questionsUrl);
      // * format public quiz questions array to be similar to the private quiz questions array format
      const formattedQuestions = formatPublicQuestions(data);
      const publicQuizInfo = {
        id: `${quizId}`, title: quizId, teacher_name: 'Quizzer Team', mark: 10, time: 6, type,
      };
      setExamTime({ minutes: 6, seconds: 0 });

      setQuiz({ ...publicQuizInfo, questions: formattedQuestions });
      return setLoading(false);
    }

    // * private quiz
    questionsUrl = `/api/v1/student/questions/${quizId}`;
    const PrivateQuizDetailsUrl = `/api/v1/student/quiz/${quizId}`;
    const [
      {
        data: { data: questions },
      },
      {
        data: { data: privateQuizInfo },
      },
    ] = await Promise.all([axios.get(questionsUrl), axios.get(PrivateQuizDetailsUrl)]);

    setExamTime({ minutes: privateQuizInfo.time, seconds: 0 });

    setQuiz({ ...privateQuizInfo, questions, type: 'private' });
    return setLoading(false);
  };

  const submitAnswers = async ({ hasPressedSubmitBtn = false }:THasPressedSubmitBtn) => {
    const hasTimeLeft = examTime.seconds > 0 || examTime.minutes > 0;

    if (hasTimeLeft && hasPressedSubmitBtn) {
      await confirm({ description: 'are you sure you want to submit?', title: 'warning' });
    }

    const hasUnAnsweredQuestions = Object.keys(answers)?.length < quiz.questions?.length;
    if (hasUnAnsweredQuestions && hasTimeLeft && hasPressedSubmitBtn) {
      await confirm({ description: 'You still have unanswered questions! are you sure you want to continue?', title: 'warning' });
    }

    setExamTime({ minutes: 0, seconds: 0 });

    quiz.questions?.forEach(({ question, answers: { answer } }: IQuestion) => {
      const CorrectAnswer = answers[question]?.toLowerCase() === answer.toString().toLowerCase();
      if (CorrectAnswer) score += 1;
    });

    setHasSubmitted(true);
    setLoading(false);
  };

  const sendScore = async ({ hasPressedSubmitBtn }:THasPressedSubmitBtn) => {
    await submitAnswers({ hasPressedSubmitBtn });
    if (!user) {
      return navigate(`/student/quiz/result?score=${score}&mark=${quiz.mark}&type=${quiz.type}`, { replace: true });
    }

    try {
      const publicQuizId = quiz.title.split('_').join('&');
      const endPoint = quiz.type === 'public' ? `leaderboard/${publicQuizId}` : 'score';
      const url = `/api/v1/student/${endPoint}`;

      await axios.post(url, { score, quizId: quiz.id });
      const message = quiz.type === 'public'
        ? 'Added To Leaderboard'
        : 'Quiz Result Sent To Your Email';

      showSnackBar(message, 'success');
      if (quiz.type === 'private') return navigate(`/student/quiz/result?type=${quiz.type}`, { replace: true });
      return navigate(`/student/quiz/result?score=${score}&mark=${quiz.mark}&type=${quiz.type}`, { replace: true });
    } catch (error:any) {
      showSnackBar(error.response.message, 'error');
      return navigate('/error', { replace: true });
    }
  };

  // * prompt user from navigating away from quiz
  useBlocker(async () => {
    await sendScore({ hasPressedSubmitBtn: true });
    if (quiz.type === 'private') return navigate(`/student/quiz/result?type=${quiz.type}`, { replace: true });
    return navigate(`/student/quiz/result?score=${score}&mark=${quiz.mark}&type=${quiz.type}`, { replace: true });
  }, !hasSubmitted);

  useEffect(() => {
    try {
      fetchQuiz();
    } catch (e: any) {
      showSnackBar(e.response.message, 'error');
    }
  }, []);

  useEffect(() => {
    const timerOptions = {
      sendScore, setExamTime, examTime, hasSubmitted,
    };
    const timerId = timer(timerOptions);

    return () => clearInterval(timerId);
  }, [examTime]);

  return (
    <>
      {isLoading && <QuizSkeleton />}
      {!isLoading && (
      <Grid container marginY="5rem" position="relative">
        <Container maxWidth="md">

          <Grid item className={classes.header} sx={{ fontSize: { xs: '0.4rem', md: '.5rem' } }}>
            <Typography variant="h5" color="secondary.light" fontWeight="bold" letterSpacing="2px" gutterBottom fontSize="2em">
              {quiz.title}
              {' '}
              - Quiz
            </Typography>
            <Typography variant="body2" fontSize="2em" letterSpacing="2.2px">
              Assigned By
              {' '}
              <Typography variant="h6" component="span" color="secondary.light" fontWeight="bold" display="inline" fontSize="1.5em">
                {quiz.teacher_name}
                {' '}
              </Typography>
              | Timed Session |
              {' '}
              {quiz.questions?.length}
              Questions
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.timer}>
            <Icon sx={{ width: '100%', textAlign: 'end' }}>
              <TimerIcon />
            </Icon>

            <Typography color="primary" my="0.5rem" variant="body1">
              {examTime.minutes}
              :
              {examTime.seconds < 10 ? `0${examTime.seconds}` : examTime.seconds}
            </Typography>
          </Grid>

          <Grid item xs={12} gap="5rem" sx={{ display: 'flex' }} flexDirection="column" component="div">
            <Questions
              questions={quiz.questions}
              setAnswers={setAnswers}
              hasSubmitted={hasSubmitted}
              answers={answers}
            />
          </Grid>

          <Grid item xs={12} textAlign="center">
            {hasSubmitted && (<LinearProgress style={{ marginBlock: '30px' }} />)}

            {!hasSubmitted && (
            <Button onClick={() => sendScore({ hasPressedSubmitBtn: true })} size="large" className={classes.btn} variant="contained" disabled={hasSubmitted}>
              Submit
            </Button>
            )}
          </Grid>
        </Container>
      </Grid>
      )}
    </>
  );
}

export default Quiz;
