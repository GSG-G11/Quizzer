import React from 'react';
import { Divider, Stack } from '@mui/material';
import { Paper, Typography } from '../../../mui';
import { useAuth } from '../../../Hooks';

function TeacherInfo() {
  const { username, bio, avatar }:any = useAuth().user || null;

  console.log(username, bio, avatar);

  return (
    <Paper
      variant="outlined"
      style={{
        border: '1px solid', fontSize: '200px', width: '40%', height: '100%', borderRadius: '10px',
      }}
    >
      <Stack paddingBottom="10px" paddingTop="5px">
        <Typography fontWeight="bold" padding="5px">My Info</Typography>
        <Divider sx={{ borderBottomWidth: 2, background: 'black' }} />
      </Stack>
      <Stack>
        <Typography>Teacher Info</Typography>
      </Stack>
      <Typography>Teacher Info</Typography>
      <Typography>Teacher Info</Typography>
    </Paper>
  );
}

export default TeacherInfo;
