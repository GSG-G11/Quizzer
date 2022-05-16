import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Button, Grid, Paper, Container, Stack, PublicIcon,
} from '../../mui';
import landing from '../../Assets/landing.png';
import classes from './Landing.module.css';

function Landing() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid lg={5} sm={12}>
            <Typography
              variant="h3"
              color="primary"
              style={{
                paddingTop: '60px', paddingBottom: '30px', lineHeight: '150%', fontWeight: 600,
              }}
              className={classes.popularInfoTitle}
            >
              The 100%
              engagement
              platform
            </Typography>
            <Typography
              color="primary"
              variant="h5"
              style={{ paddingTop: '30px', lineHeight: '170%', paddingBottom: '40px' }}
              className={classes.popularInfoDetails}
            >
              Quizzer, where the world’s
              recruters design their hiring
              tests And discover their skills.
            </Typography>
            <Link style={{ textDecoration: 'none' }} to="/student">
              <Stack justifyContent="center">
                <Button
                  style={{
                    padding: '10px', borderRadius: '10px', width: '66%',
                  }}
                  variant="contained"
                  color="primary"
                  className={classes.popularInfoButton}
                >
                  <Typography
                    color="secondary"
                    fontWeight="600"
                    style={{ marginInline: 'auto' }}
                    sx={{ fontSize: { xs: '12px', md: '20px' }, textAlign: 'center' }}
                  >
                    Test Your Knowledge
                  </Typography>
                </Button>
              </Stack>
            </Link>
          </Grid>

        </Grid>

      </Container>
      <Grid container className={classes.popularInfo}>

        <Container>
          <Grid item lg={6} sm={12}>
            <img className={classes.image} src={landing} alt="landing" />
            <Paper className={classes.paper}>
              <PublicIcon color="primary" className={classes.worldIcon} />
              <Typography color="primary" variant="h6" style={{ fontSize: '22px' }}>
                Used by more than 50 million
                people around the world.
              </Typography>
            </Paper>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Landing;
