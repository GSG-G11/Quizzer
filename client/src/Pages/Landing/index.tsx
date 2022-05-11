import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Button, Grid, Container, Paper,
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import landing from '../../Assets/landing.png';
import classes from './Landing.module.css';

function Landing() {
  return (
    <Container>
      <Grid container xs={12} spacing={6}>
        <Grid item xs={5}>
          <Typography paddingTop="20px" variant="h2">
            The 100%
            engagement
            platform
          </Typography>
          <Typography color="primary" paddingTop="20px" paddingBottom="20px" variant="h5">
            Quizzer, where the world’s
            recruters design their hiring
            tests.
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="public">
            <Button style={{ padding: '15px' }} variant="contained" color="primary">
              <Typography style={{ fontWeight: 'bold' }} color="secondary">Test Your Knowledge</Typography>
            </Button>
          </Link>
          <div className={classes.popularInfo}>
            <Paper className={classes.paper}>
              <PublicIcon color="primary" className={classes.worldIcon} />
              <Typography color="primary" variant="h6">
                Used by more than 50 million
                people around the world.
              </Typography>
            </Paper>
          </div>
        </Grid>

        <Grid item xs={7}>
          {/* <div className={classes.hight} /> */}
          <img width="100%" height="100%" src={landing} alt="landing" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Landing;
