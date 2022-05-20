import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Paper, Typography, Stack, PersonIcon, Box, Divider,
} from '../../../mui';
import classes from './StudentProfile.module.css';

function StudentQuizzes() {
  const navigate = useNavigate();
  const [studentQuizzes, setStudentQuizzes] = useState<any>({});

  const getStudentProfile = async () => {
    try {
      const { data: { data: studentQuizzesAttend } } = await axios.get('/api/v1/student/profile');
      // console.log(data);

      setStudentQuizzes(studentQuizzesAttend);
    } catch (err) {
      navigate('error');
    }
  };

  useEffect(() => {
    getStudentProfile();
  }, []);

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
            !studentQuizzes.length
              ? (
                <Stack style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Typography
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                  >
                    No Quizzes to show.

                  </Typography>
                </Stack>
              )
              : studentQuizzes.map((quiz:any) => (
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      style={{
                        fontWeight: 'bold', fontSize: '20px', margin: '20px', cursor: 'pointer',
                      }}
                      className={classes.quizTitle}
                      onClick={() => navigate('quiz-details')}
                    >
                      {quiz.title.charAt(0).toUpperCase() + quiz.title.slice(1)}
                    </Typography>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        score:
                        {' '}
                        {quiz.student_score}
                      </Typography>
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

export default StudentQuizzes;
