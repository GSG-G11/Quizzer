import React from 'react';
import { Container, Typography, Grid } from '../../../mui';
import { useAuth } from '../../../Hooks';
import TeacherInfo from './TeacherInfo';
import TeacherQuizzes from './TeacherQuizzes';

function TeacherProfile() {
  const { username }:any = useAuth().user || null;

  return (
    <Container>
      <Typography textAlign="center" fontWeight="600">
        {username}
        {' '}
        profile
      </Typography>
      <Grid>
        <TeacherInfo />
        <TeacherQuizzes />
      </Grid>
    </Container>
  );
}

export default TeacherProfile;
