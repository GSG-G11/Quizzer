import React from 'react';
import { Stack, Skeleton } from '../../mui';

export default function LandingSkeleton() {
  return (
    <Stack marginTop="-40px">
      <Skeleton animation="wave" width="100%" height={180} />
      <Stack width="100%" alignItems="center">
        <Stack width="55%">
          <Skeleton animation="wave" width="40px" height={60} style={{ alignSelf: 'end' }} />
        </Stack>
        <Skeleton animation="wave" width="700px" height={90} />
        <Skeleton animation="wave" width="600px" height={90} />
        <Skeleton animation="wave" width="600px" height={90} />
        <Skeleton animation="wave" width="600px" height={90} />
        <Skeleton animation="wave" width="600px" height={90} />
      </Stack>
    </Stack>
  );
}
