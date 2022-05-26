import React from 'react';
import {
  Container, Typography, Grid,
} from '../../../mui';
import { useQuizzes } from '../../../Hooks';
import TeacherInfo from './TeacherInfo';
import TeacherQuizzes from './TeacherQuizzes';
import { IQuizzesContext } from '../../../Contexts/Quizzes/interfaces';

function TeacherProfile() {
  const { quizzes }:IQuizzesContext = useQuizzes();

  return (
    <Container>
      <Typography textAlign="center" color="primary" fontWeight="bold" variant="h3" style={{ padding: '40px' }}>
        My Profile
      </Typography>

      <Grid container spacing={2} marginY="2.5rem">
        <Grid item xs={12} sm={5}>

          <TeacherInfo />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TeacherQuizzes quizzes={quizzes} />
        </Grid>

      </Grid>

    </Container>

  );
}

export default TeacherProfile;
