import React from 'react';
import { Paper, Typography } from '../../../mui';
import { useAuth } from '../../../Hooks';

function TeacherInfo() {
  const { username, bio, avatar }:any = useAuth().user || null;

  console.log(username, bio, avatar);

  return (
    <Paper>
      <Typography>Teacher Info</Typography>
    </Paper>
  );
}

export default TeacherInfo;
