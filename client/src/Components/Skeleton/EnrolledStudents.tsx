import { Container } from '@mui/material';
import React from 'react';
import { Skeleton, Stack } from '../../mui';

function EnrolledStudents() {
  return (
    <>
      <Skeleton animation="wave" width="100%" height={100} />
      <Skeleton animation="wave" width="100%" height={90} />
      <Skeleton animation="wave" width="100%" height={90} />
      <Skeleton animation="wave" width="100%" height={400} />
    </>
  );
}

export default EnrolledStudents;
