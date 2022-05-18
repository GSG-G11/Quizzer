import React from 'react';
import {
  Container, Typography, Box, Divider, Stack,
} from '../../../mui';
import { useAuth, getQuizzes } from '../../../Hooks';
import TeacherInfo from './TeacherInfo';
import TeacherQuizzes from './TeacherQuizzes';

function TeacherProfile() {
  const { quizzes }:any | null = getQuizzes();

  const { username }:any = useAuth().user || null;

  return (
    <Container>
      <Typography textAlign="center" fontWeight="bold" fontSize="25px" style={{ padding: '50px' }}>
        My Profile
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ background: 'black' }} />}
        spacing={2}
      >
        <TeacherInfo />
        <TeacherQuizzes quizzes={quizzes} />
      </Stack>

    </Container>

  );
}

export default TeacherProfile;
