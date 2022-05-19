import { Timer as TimerIcon } from '@mui/icons-material';
import React, { useEffect, useId, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import axios from 'axios';
import { QuestionCard } from '../../../Components/Student';
import {
  Typography, Grid, Button, Container, Icon,
} from '../../../mui';
import { IQuestions, ILocation } from './interfaces';
import classes from './Quiz.module.css';
import { useBlocker, useSnackBar } from '../../../Hooks';
import { timer } from '../../../Utils';

function Quiz() {
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const confirm = useConfirm();
  const { state: { quiz } } = useLocation() as ILocation;
  const {
    title, questions, time, teacher_name: teacherName, mark, type, id: quizId,
  } = quiz;
  const [examTime, setExamTime] = useState({ minutes: time || 6, seconds: 0 });

  const submitAnswers = async ({ hasPressedSubmitBtn }:{hasPressedSubmitBtn:boolean}) => {
    if (examTime.seconds > 0 && examTime.minutes > 0 && hasPressedSubmitBtn) {
      await confirm({ description: 'are you sure you want to submit?', title: 'warning' });
    }

    setExamTime({ minutes: 0, seconds: 0 });

    questions.forEach(({ question, answers: { answer } }: IQuestions) => {
      const CorrectAnswer = answers[question]?.toLowerCase() === answer.toString().toLowerCase();

      if (CorrectAnswer) setScore((prev) => prev + 1);
    });

    setHasSubmitted(true);
    return score;
  };

  const sendScore = async ({ hasPressedSubmitBtn }:{ hasPressedSubmitBtn:boolean }) => {
    const myScore = await submitAnswers({ hasPressedSubmitBtn });
    try {
      const endPoint = type === 'public' ? `leaderboard/${title}` : 'score';
      const url = `/api/v1/student/${endPoint}`;
      const { data } = await axios.post(url, { score: myScore, quizId });
      showSnackBar(data.message, 'success');
    } catch (error:any) {
      showSnackBar(error.response.message, 'error');
    }
  };

  const navigateToResultPage = () => {
    navigate('/student/quiz/result', { state: { score, mark }, replace: true });
  };

  // * block user from navigating away from quiz
  useBlocker(async () => {
    await confirm({ description: 'are you sure you want to leave?, your score will submitted if you did', title: 'Warning' });
    const hasPressedSubmitBtn = false;
    await sendScore({ hasPressedSubmitBtn });
    navigate('/student/');
  }, !hasSubmitted);

  const onConfirmRefresh = (event:any) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.returnValue = 'Are you sure you want to leave the page?, you score will be submitted if you did!';

    sendScore({ hasPressedSubmitBtn: false });
    return event;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', onConfirmRefresh, { capture: true });
    return () => window.removeEventListener('beforeunload', onConfirmRefresh, { capture: true });
  }, []);

  useEffect(() => {
    const timerId = timer({
      submitAnswers, setExamTime, examTime, hasSubmitted,
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
          {hasSubmitted && (
          <Button
            className={classes.result_btn}
            variant="outlined"
            size="large"
            onClick={navigateToResultPage}
          >
            See Result
          </Button>

          )}
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
          {questions.map((question: IQuestions, i:number) => (
            <QuestionCard
              key={useId()}
              qNumber={i + 1}
              question={question.question}
              options={question.answers.options}
              setAnswers={setAnswers}
              hasSubmitted={hasSubmitted}
              questionType={question.type}
            />
          ))}
        </Grid>

        <Grid item xs={12} textAlign="center">
          {!hasSubmitted && (
            <Button onClick={() => sendScore({ hasPressedSubmitBtn: true })} variant="contained" disabled={hasSubmitted}>
              Submit
            </Button>
          )}

          {hasSubmitted && (
            <Button
              variant="outlined"
              size="large"
              onClick={navigateToResultPage}
            >
              See Result
            </Button>
          )}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Quiz;
