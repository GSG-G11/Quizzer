import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Stack,
  Typography,
  Button,
  AccessTimeFilledIcon,
} from '../../../mui';
import { useSnackBar, useAuth } from '../../../Hooks';
import classes from './QuizDetails.module.css';

type Quiz = {
  teacher_id?: string;
  teacher_name?: string;
  id?: string;
  title: string;
  description: string;
  mark?: number;
  time?: number;
  questions?: [];
}

function QuizDetails() {
  const { state: { quiz } }: any = useLocation();
  const navigate = useNavigate();
  const { isAuthModalOpen, setAuthModalOpen } = useAuth();
  const { showSnackBar } = useSnackBar();
  const isPrivateQuiz = quiz.id;
  const quizDetails: Quiz = { ...quiz };

  if (!isPrivateQuiz) {
    quizDetails.questions = quiz.questions.map((question: any) => ({
      question,
      type: 'mcq',
      answers: {
        answer: question.correctAnswer,
        options: [...question.incorrectAnswers, question.correctAnswer].sort(
          () => 0.5 - Math.random(),
        ),
      },
    }));
  }

  const handleEnroll = async () => {
    if (isPrivateQuiz) {
      try {
        const { data: { data: questions } } = await axios.get(`/api/v1/student/questions/${quiz.id}`);
        navigate('/student/quiz/enroll', { state: { quiz: { ...quizDetails, questions, type: 'private' } } });
      } catch ({ response: { data: { message } } }) {
        if (message === 'Unauthorized') {
          setAuthModalOpen(!isAuthModalOpen);
        } else if (message === "Student can't attend a quiz more than once") {
          showSnackBar('You have already enrolled in this quiz', 'warning');
        }
      }
    } else {
      navigate('/student/quiz/enroll', { state: { quiz: { ...quizDetails, type: 'public' } } });
    }
  };

  const {
    teacher_name: teacherName,
    title,
    description,
    time,
  } = quizDetails;

  const quizSource = (
    <Typography color="primary" className={classes.teacherWrapper}>
      <span className={classes.teacher}>{isPrivateQuiz ? 'Teacher: ' : 'From: '}</span>
      {isPrivateQuiz ? teacherName : 'Quizzer Team'}
    </Typography>
  );

  return (
    <Container className={classes.container}>
      <Typography variant="h4" color="primary" className={classes.title}>{title}</Typography>
      <Typography>{quizSource}</Typography>
      <Typography className={classes.description}>{description}</Typography>
      <Stack flexDirection="row" justifyContent="center" alignItems="center">
        <span className={classes.timeLimit}>
          Exact Time Limit:
          {' '}
        </span>
        <span className={classes.spanIcon}>
          {' '}
          {isPrivateQuiz ? `${time}m` : '10m'}
          {' '}
          <AccessTimeFilledIcon className={classes.timeIcon} />
        </span>
      </Stack>
      <Stack>
        <Button variant="contained" className={classes.enrollBtn} color="primary" onClick={handleEnroll}>Enroll now</Button>
      </Stack>
    </Container>
  );
}

export default QuizDetails;
