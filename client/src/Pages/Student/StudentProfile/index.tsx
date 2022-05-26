import React from 'react';
import {
  Container, Typography, Grid,
} from '../../../mui';
import StudentInfo from './StudentInfo';
import StudentQuizzes from './StudentQuizzes';

function StudentProfile() {
  return (
    <Container>
      <Typography textAlign="center" color="primary" fontWeight="bold" variant="h3" style={{ padding: '40px' }}>
        My Profile
      </Typography>

      <Grid container spacing={2} marginY="2.5rem">
        <Grid item xs={12} sm={5}>

          <StudentInfo />
        </Grid>
        <Grid item xs={12} sm={7}>
          <StudentQuizzes />
        </Grid>

      </Grid>

    </Container>

  );
}

export default StudentProfile;
