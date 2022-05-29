import {
  Box, Button, Container, Link, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import success from '../../../Assets/success.png';
import failed from '../../../Assets/oops.png';

function QuizResult() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const score = Number(searchParam.get('score'));
  const mark = Number(searchParam.get('mark'));
  const type = searchParam.get('type');
  const hasPassed = score >= mark / 2;

  return (
    <Container>
      <Stack direction="column" alignItems="center" mt="4rem" spacing={3}>
        {type === 'private' && (
        <>
          <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} color="success.main" component="p" fontWeight="500">
            Your score has been set to Your Email
          </Typography>
          <Typography variant="h6" sx={{ fontSize: { xs: '0.8rem', md: '1.2rem' } }} textAlign="center" component="p" color="warning.main">
            Please check your inbox and spam
          </Typography>
          <Typography variant="h6" component="p" textAlign="center" sx={{ fontSize: { xs: '0.7rem', md: '1.2rem' } }} color="info.main">
            if you are having trouble finding your score
            please contact your teacher.
          </Typography>

          <Typography position="absolute" bottom="1rem" variant="body1" color="primary" component="p" sx={{ fontSize: { xs: '0.6rem', md: '1rem' } }}>
            feel free to contact us for further assistance
            <Link href="mailto:quizzer.gsg@gmail.com" color="secondary.light" sx={{ fontSize: { xs: '0.8rem', md: '1.2rem' }, mx: '0.4rem', textDecoration: 'none' }}>Quizzer Team</Link>
          </Typography>

        </>
        )}

        {type === 'public' && (
        <>
          <Typography variant="h5" color={hasPassed ? 'success' : 'error'} fontWeight="500">
            {hasPassed ? 'Congratulations you passed' : 'You Failed to Pass the quiz'}
          </Typography>
          <Box>
            <img src={hasPassed ? success : failed} alt="" style={{ mixBlendMode: 'hard-light', width: '100%' }} />
          </Box>
          <Typography variant="subtitle1">
            Your score is
            {' '}
            <Typography fontWeight="bold" color={hasPassed ? 'success.main' : 'error'} variant="body1" display="inline" fontSize="1.2rem">
              {score}
              /
              {mark}
            </Typography>
          </Typography>
          <Button variant="contained" sx={{ color: 'secondary.light' }} onClick={() => navigate('/student')}>Go Home</Button>
        </>
        )}

      </Stack>
    </Container>
  );
}

export default QuizResult;
