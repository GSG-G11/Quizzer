import { Timer as TimerIcon } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import axios from 'axios';
import { Questions } from '../../../Components/Student';
import {
  Typography, Grid, Button, Container, Icon,
} from '../../../mui';
import { IQuestion, ILocation } from './interfaces';
import classes from './Quiz.module.css';
import { useBlocker, useSnackBar } from '../../../Hooks';
import { timer } from '../../../Utils';

function Quiz() {
  const [answers, setAnswers] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();
  let { current: score } = useRef(0);
  const confirm = useConfirm();
  const {
    state: {
      quiz: {
        title, questions, time, teacher_name: teacherName, mark, type, id: quizId,
      },
    },
  } = useLocation() as ILocation;
  const [examTime, setExamTime] = useState({ minutes: time || 6, seconds: 0 });

  const submitAnswers = async ({ hasPressedSubmitBtn }:{ hasPressedSubmitBtn:boolean }) => {
    const hasTimeLeft = examTime.seconds > 0 || examTime.minutes > 0;

    if (hasTimeLeft && hasPressedSubmitBtn) {
      await confirm({ description: 'are you sure you want to submit?', title: 'warning' });
    }

    const hasUnAnsweredQuestions = Object.keys(answers).length < questions.length;
    if (hasUnAnsweredQuestions && hasTimeLeft && hasPressedSubmitBtn) {
      await confirm({ description: 'You still have unanswered questions! are you sure you want to continue?', title: 'warning' });
    }

    setExamTime({ minutes: 0, seconds: 0 });

    questions.forEach(({ question, answers: { answer } }: IQuestion) => {
      const CorrectAnswer = answers[question]?.toLowerCase() === answer.toString().toLowerCase();
      if (CorrectAnswer) score += 1;
    });

    setHasSubmitted(true);
  };

  const sendScore = async ({ hasPressedSubmitBtn }:{ hasPressedSubmitBtn:boolean }) => {
    await submitAnswers({ hasPressedSubmitBtn });
    try {
      const endPoint = type === 'public' ? `leaderboard/${title}` : 'score';
      const url = `/api/v1/student/${endPoint}`;
      await axios.post(url, { score, quizId });

      navigate('/student/quiz/result', { state: { score, mark }, replace: true });
      type === 'public'
        ? showSnackBar('Added To Leaderboard', 'success')
        : showSnackBar('Quiz Result Sent To Your Email', 'success');
    } catch (error:any) {
      showSnackBar(error.response.message, 'error');
    }
  };

  // * prompt user from navigating away from quiz
  useBlocker(async () => {
    await sendScore({ hasPressedSubmitBtn: true });
    navigate('/student/', { replace: true });
  }, !hasSubmitted);

  // * prompt user from refreshing
  const onConfirmRefresh = (event:any) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.returnValue = '';
    sendScore({ hasPressedSubmitBtn: false });
    return event;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', onConfirmRefresh, { capture: true });
    return () => window.removeEventListener('beforeunload', onConfirmRefresh, { capture: true });
  }, []);

  useEffect(() => {
    const timerId = timer({
      sendScore, setExamTime, examTime, hasSubmitted,
    });

    return () => clearInterval(timerId);
  }, [examTime]);

  return (
    <Grid container marginY="5rem" position="relative">
      <Container maxWidth="md">

        <Grid item className={classes.header} sx={{ fontSize: { xs: '0.4rem', md: '.5rem' } }}>
          <Typography variant="h5" color="secondary.light" fontWeight="bold" letterSpacing="2px" gutterBottom fontSize="2em">
            {title}
            {' '}
            - Quiz
          </Typography>
          <Typography variant="body2" fontSize="2em" letterSpacing="2.2px">
            Assigned By
            {' '}
            <Typography variant="h6" component="span" color="secondary.light" fontWeight="bold" display="inline" fontSize="1.5em">
              {teacherName || 'Quizzer Team'}
              {' '}
            </Typography>
            | Timed Session |
            {' '}
            {questions.length}
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

        <Grid item xs={12} gap="5rem" sx={{ display: 'flex' }} flexDirection="column">
          <Questions
            questions={questions}
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
  );
}

export default Quiz;