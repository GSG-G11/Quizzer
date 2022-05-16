import { Timer as TimerIcon } from '@mui/icons-material';
import {
  Container, FormControlLabel, Icon, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuestionCard } from '../../../Components/Student';
import { Typography, Grid, Button } from '../../../mui';
import { IQuestions, ILocation } from './interfaces';

function Quiz() {
  const [score, setScore] = useState<number>(0);
  const [msqAnswers, setMsqAnswers] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();
  const {
    state: {
      quiz: {
        title, questions, type, time,
      },
    },
  } = useLocation() as ILocation;

  const [timer, setTimer] = useState({ minutes: time || 5, seconds: 0 });

  const handleSubmitAnswers = () => {
    const numberOfQuestions = questions.length;
    const submittedQuestions = Object.keys(msqAnswers).length;

    // if (submittedQuestions < numberOfQuestions) {
    //   // eslint-disable-next-line no-alert
    //   alert('Please answer all questions');
    //   return;
    // }

    // set score
    questions.forEach(({ question, answers: { answer } }:IQuestions) => {
      if (msqAnswers[question] === answer) setScore((prev) => prev + 1);
    });

    setHasSubmitted(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { seconds: sec, minutes: min } = timer;

      if (sec > 0) setTimer(({ seconds, minutes }) => ({ minutes, seconds: seconds - 1 }));

      if (sec === 0) {
        if (min === 0) {
          clearInterval(interval);
          handleSubmitAnswers();
        } else setTimer(({ minutes }) => ({ minutes: minutes - 1, seconds: 59 }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Grid container marginY="5rem">
      <Container maxWidth="md">

        <Grid item textAlign="center" xs={12} mb="1rem">
          {hasSubmitted && (
          <Button variant="outlined" size="large" onClick={() => navigate('/student/quiz/result', { state: { score }, replace: true })}>
            See Result
          </Button>
          )}
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Typography variant="h6">
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'end' }} mt="2rem">
          <Icon sx={{ width: '100%', textAlign: 'end' }}>
            <TimerIcon />
          </Icon>
          <Typography color="primary" my="0.5rem" variant="body1">
            {timer.minutes}
            :
            {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
          </Typography>
        </Grid>

        <Grid item xs={12} gap="5rem" sx={{ display: 'flex' }} flexDirection="column">
          {questions.map(({
            id, question, answers: { options }, type: questionType,
          }:IQuestions) => (
            <QuestionCard
              key={id}
              question={question}
              options={options}
              setMsqAnswers={setMsqAnswers}
              hasSubmitted={hasSubmitted}
              quizType={type}
              questionType={questionType}
            />
          ))}
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button onClick={handleSubmitAnswers} variant="contained" disabled={hasSubmitted} type="submit">Submit</Button>
        </Grid>

      </Container>

    </Grid>
  );
}

export default Quiz;
