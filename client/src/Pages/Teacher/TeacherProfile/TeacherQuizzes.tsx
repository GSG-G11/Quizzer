import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper, Typography, Stack, PersonIcon, Box, Divider,
} from '../../../mui';
import classes from './TeacherProfile.module.css';
import { IQuizzes } from '../../../Contexts/Quizzes/interfaces';

interface IQuiz {
  title: string
  id: string
  description: string
  students_count: number
}

function TeacherQuizzes({ quizzes }:IQuizzes) {
  const navigate = useNavigate();

  return (
    <Paper
      variant="outlined"
      style={{
        border: '1px solid', fontSize: '200px', height: '515px', overflow: 'auto', borderRadius: '10px', padding: '20px', paddingBottom: '30px',
      }}
      className={classes.quizzesContainer}
    >
      <Box>
        <Stack>
          <Typography color="primary" fontWeight="bold" marginBottom="5px">My Quizzes</Typography>
          <Divider sx={{ borderBottomWidth: 2, background: 'black' }} />
        </Stack>
        {
            !quizzes.length
              ? (
                <Stack style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Typography variant="h5" color="primary" fontWeight="bold">No Quizzes to show.</Typography>
                </Stack>
              )
              : quizzes.map((quiz:IQuiz) => (
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      style={{
                        fontWeight: 'bold', fontSize: '20px', margin: '20px', cursor: 'pointer',
                      }}
                      className={classes.quizTitle}
                      onClick={() => navigate(`/teacher/quiz/${quiz.id}`, { state: { quizTitle: quiz.title, quizDesc: quiz.description } })}
                    >
                      {quiz.title.charAt(0).toUpperCase() + quiz.title.slice(1)}
                    </Typography>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <PersonIcon style={{ fontSize: '25px' }} />
                      <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>{quiz.students_count}</Typography>
                    </Stack>
                  </Stack>
                  <Stack paddingLeft="20px">
                    <Typography>{quiz.description}</Typography>
                  </Stack>
                  <Divider sx={{ background: '#948F8F', margin: '15px', marginTop: '25px' }} />
                </Stack>
              ))
          }

      </Box>
    </Paper>
  );
}

export default TeacherQuizzes;
