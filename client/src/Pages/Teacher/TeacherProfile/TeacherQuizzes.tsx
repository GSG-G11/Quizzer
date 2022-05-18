import { Divider } from '@mui/material';
import React from 'react';
import { Paper, Typography, Stack } from '../../../mui';

function TeacherQuizzes({ quizzes }:any | null) {
  console.log(quizzes);

  return (
    <Paper
      variant="outlined"
      style={{
        border: '1px solid', fontSize: '200px', width: '60%', height: '100%', borderRadius: '10px',
      }}
    >
      <Stack paddingBottom="10px" paddingTop="5px">
        <Typography fontWeight="bold" padding="5px">My Quizzes</Typography>
        <Divider sx={{ borderBottomWidth: 2, background: 'black' }} />
      </Stack>
      <Typography>Teacher quizzes</Typography>
      <Typography>Teacher quizzes</Typography>
      <Typography>Teacher quizzes</Typography>
    </Paper>
  );
}

export default TeacherQuizzes;
