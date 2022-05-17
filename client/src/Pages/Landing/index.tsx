import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Button, Container, Stack, PublicIcon,
} from '../../mui';
import landing from '../../Assets/landing.png';
import classes from './Landing.module.css';

function Landing() {
  return (
    <>
      <Container>
        <Stack className={classes.hero}>
          <Typography
            variant="h4"
            color="primary"
            className={classes.popularInfoTitle}
          >
            <div>The 100%</div>
            <div>engagement</div>
            <div>platform</div>
          </Typography>
          <Typography
            color="primary"
            variant="h5"
            className={classes.popularInfoDetails}
          >
            Quizzer, where the world’s
            recruiters design their hiring
            tests And discover their skills.
          </Typography>
          <Link to="/student" className={classes.link}>
            <Button variant="contained" size="large" className={classes.button}>Test Your Knowledge</Button>
          </Link>
        </Stack>
      </Container>
      <div className={classes.yellowContainer}>
        <Container>
          <Stack direction="row" style={{ position: 'relative' }} height="230px" alignItems="center">
            <div className={classes.stats}>
              <PublicIcon color="primary" style={{ fontSize: '3rem', marginRight: '1rem' }} />
              <Typography color="primary" variant="h6" fontSize="0.8rem" marginTop="auto">
                Used by more than 50 million
                people around the world.
              </Typography>
            </div>
            <img src={landing} alt="Students and teachers" className={classes.image} />
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Landing;
