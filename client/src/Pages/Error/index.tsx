import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography, Container, Button, Box,
} from '../../mui';
import classes from './Error.module.css';

function Error(props: { status: 404 | 500 }) {
  const { status } = props;
  const navigate = useNavigate();

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Typography variant="h1" fontWeight="bold" color="primary">{status}</Typography>
        <Typography
          component="p"
          variant="h5"
          fontSize="1.8"
          marginBottom="1rem"
        >
          {status === 404 ? 'Page Not Found' : 'Internal Server Error'}
        </Typography>
        {status === 404 ? (
          <Typography component="span" fontSize="1.3rem">
            The page you&apos;re looking for is not found, Go back to
            {' '}
            <Button variant="contained" onClick={() => navigate('/')} sx={{ color: 'secondary.main' }}>Homepage</Button>
          </Typography>
        ) : (
          <Typography
            component="span"
            fontSize="1.3rem"
          >
            We are having some issues with our server, please try again later.
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Error;
