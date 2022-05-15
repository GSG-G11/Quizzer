import React from 'react';
// import { MsqCard } from '../../Components';
import { Typography, Grid, Stack } from '../../mui';

const takeQuiz = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography textAlign="center">GrammerTest</Typography>
    </Grid>

    <Grid item xs={12}>
      <Stack direction="row" justifyContent="space-around">
        <Typography textAlign="center" variant="caption">Question 2/10</Typography>
        <Typography textAlign="center" variant="caption">25m</Typography>
      </Stack>
    </Grid>

    <Grid item xs={12} gap="5rem" sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* <MsqCard /> */}
    </Grid>
  </Grid>
);

export default takeQuiz;
