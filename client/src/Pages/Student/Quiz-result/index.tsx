import {
  Box, Button, Container, Stack, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import success from '../../../Assets/success.png';
import failed from '../../../Assets/oops.png';

function QuizResult() {
  const navigate = useNavigate();
  const { state } = useLocation() as any;
  const { score, mark = 10 } = state || {};

  const hasPassed = score > (mark / score);

  return (
    <Container>
      <Stack direction="column" alignItems="center" mt="4rem" spacing={3}>
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
      </Stack>
    </Container>
  );
}

export default QuizResult;
