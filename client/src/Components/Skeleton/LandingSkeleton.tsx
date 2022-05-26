import React from 'react';
import { Stack, Skeleton, Container } from '../../mui';

function LandingSkeleton() {
  return (
    <Container>

      <Stack width="100%" marginTop="50px">
        <Skeleton animation="wave" width="250px" height={100} />
        <Skeleton animation="wave" width="440px" height={100} />
        <Skeleton animation="wave" width="270px" height={90} />
        <Skeleton animation="wave" width="440px" height={130} />
        <Skeleton
          animation="wave"
          width="600px"
          height={485}
          style={{
            position: 'absolute',
            alignSelf: 'end',
          }}
        />
      </Stack>
    </Container>
  );
}

export default LandingSkeleton;
