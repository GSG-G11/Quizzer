/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {
  Paper, Typography, Stack, Box, Divider,
} from '../../../mui';
import classes from './StudentProfile.module.css';

function StudentQuizzes() {
  const navigate = useNavigate();
  const [privateQuizzes, setPrivateQuizzes] = useState<any>({});
  const [publicQuizzes, setPublicQuizzes] = useState<any>({});
  const [quizzesType, setQuizzesType] = useState<string>('private');

  const getPrivateQuizzes = async () => {
    try {
      const { data: { data: studentQuizzesAttend } } = await axios.get('/api/v1/student/profile');
      setPrivateQuizzes(studentQuizzesAttend);
    } catch (err) {
      navigate('error');
    }
  };

  const getPublicQuizzes = async () => {
    try {
      const { data: { data: studentQuizzesAttend } } = await axios.get('/api/v1/student/public-quizzes');
      setPublicQuizzes(studentQuizzesAttend);
    } catch (err) {
      navigate('error');
    }
  };

  useEffect(() => {
    getPrivateQuizzes();
    getPublicQuizzes();
  }, []);

  const handleChange = (e:any, quizType: string) => {
    setQuizzesType(quizType);
  };

  return (
    <Paper
      variant="outlined"
      style={{
        border: '1px solid', fontSize: '200px', height: '515px', overflow: 'auto', borderRadius: '10px', padding: '20px', paddingBottom: '30px',
      }}
      className={classes.quizzesContainer}
    >
      <Box>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography
            color="primary"
            fontWeight="bold"
            marginBottom="5px"
          >
            My Quizzes

          </Typography>
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={quizzesType}
            exclusive
            style={{ marginBottom: '5px', marginTop: '-14px' }}
            onChange={handleChange}
          >
            <ToggleButton style={{ fontSize: '13px', fontWeight: 'bold' }} value="private">Private</ToggleButton>
            <ToggleButton style={{ fontSize: '13px', fontWeight: 'bold' }} value="public">Public</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Divider sx={{ borderBottomWidth: 2, background: 'black' }} />

        {
          quizzesType === 'private'
            ? (
              <>
                {
            !privateQuizzes.length
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
              : privateQuizzes.map((quiz:any) => (
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      style={{
                        fontWeight: 'bold', fontSize: '20px', margin: '20px',
                      }}

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
              </>
            )

            : (
              <>
                {
            !publicQuizzes.length
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
              : publicQuizzes.map((quiz:any) => (
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      style={{
                        fontWeight: 'bold', fontSize: '20px', margin: '20px',
                      }}

                    >
                      {quiz.quiz_title}
                    </Typography>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                      <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        score:
                        {' '}
                        {quiz.score}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack paddingLeft="20px">
                    <Typography>
                      Test your knowledge on the world’s
                      most famous paintings,novels and much more.

                    </Typography>
                  </Stack>
                  <Divider sx={{ background: '#948F8F', margin: '15px', marginTop: '25px' }} />
                </Stack>
              ))
          }
              </>
            )

          }

      </Box>
    </Paper>
  );
}

export default StudentQuizzes;
