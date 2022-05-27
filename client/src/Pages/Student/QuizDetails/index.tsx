import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import { categories, autoCompleteOptions } from '../PublicQuizzes/categories';
import {
  Container,
  Stack,
  Typography,
  Button,
  AccessTimeFilledIcon,
  Skeleton,
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
}

function QuizDetails() {
  const [loading, setLoading] = useState<boolean>(true);
  const [quiz, setQuiz] = useState<Quiz>({ title: '', description: '' });
  const navigate = useNavigate();
  const { showSnackBar } = useSnackBar();
  const confirm = useConfirm();
  const { setAuthModalType, setQuizAttemptedToEnroll, user } = useAuth();
  const [searchParams] = useSearchParams();
  const isPrivateQuiz = searchParams.get('type') === 'private';
  const quizId = searchParams.get('id') as string;
  const publicTitle = quizId.split('_').join('&');

  useEffect(() => {
    const validQuery = ['private', 'public'].includes(searchParams.get('type') as string) && autoCompleteOptions.includes(publicTitle);
    if (!validQuery && !isPrivateQuiz) { navigate('/quiz-not-found'); return; }

    const getPrivateQuizData = async () => {
      try {
        setLoading(true);
        const { data: { data: privateQuizData } } = await axios.get(`/api/v1/student/quiz/${quizId}`);
        setQuiz(privateQuizData);
      } catch (err: any) {
        navigate('/quiz-not-found');
      }
      setLoading(false);
    };

    if (isPrivateQuiz) {
      getPrivateQuizData();
    } else {
      setLoading(false);
      setQuiz({
        title: publicTitle,
        description: categories.find((cat) => cat.category === publicTitle)?.description as string,
      });
    }
  }, [searchParams]);

  const handleEnroll = async () => {
    if (isPrivateQuiz) {
      if (!user || !user.isVerified) {
        setAuthModalType('login_signup');
        setQuizAttemptedToEnroll(quizId);
        return;
      }
      try {
        await confirm({ description: 'are you sure you want to enroll', title: 'Warning' });
        await axios.get(`/api/v1/student/questions/${quiz.id}`);
        navigate(`/student/quiz/enroll?type=private&id=${quizId}`);
      } catch ({ response: { data: { message } } }) {
        if (message === "Student can't attend a quiz more than once") { showSnackBar('You have already enrolled in this quiz', 'warning'); }
      }
      return;
    }
    await confirm({ description: 'Are you sure you want to enroll?', title: 'Warning' });
    navigate(`/student/quiz/enroll?type=public&id=${quizId}`);
  };

  const {
    teacher_name: teacherName,
    title,
    description,
    time,
  } = quiz;

  const quizSource = (
    <Typography color="primary" className={classes.teacherWrapper}>
      <span className={classes.teacher}>{isPrivateQuiz ? 'Teacher: ' : 'From: '}</span>
      {isPrivateQuiz ? teacherName : 'Quizzer Team'}
    </Typography>
  );

  return (
    <Container className={classes.container} sx={{ marginBlock: '3rem' }}>
      {
        !loading
          ? (
            <>
              <Typography component="div" variant="h4" color="primary" className={classes.title}>{title}</Typography>
              <Typography component="div">{quizSource}</Typography>
              <Typography component="div" className={classes.description}>{description}</Typography>
              <Stack component="div" flexDirection="row" justifyContent="center" alignItems="center">
                <span className={classes.timeLimit}>
                  Exact Time Limit:
                  {' '}
                </span>
                <span className={classes.spanIcon}>
                  {' '}
                  {isPrivateQuiz ? `${time}m` : '6m'}
                  {' '}
                  <AccessTimeFilledIcon className={classes.timeIcon} />
                </span>
              </Stack>
              <Stack component="div">
                <Button variant="contained" className={classes.enrollBtn} color="primary" onClick={handleEnroll}>Enroll now</Button>
              </Stack>
            </>
          ) : (
            <Stack width="100%" alignItems="center" marginTop="50px">
              <Skeleton animation="wave" width="150px" height={50} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" width="150px" height={30} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" width="100%" height={180} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" width="150px" height={30} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" width="160px" height={70} style={{ marginBottom: 6 }} />
            </Stack>
          )
      }
    </Container>
  );
}

export default QuizDetails;
