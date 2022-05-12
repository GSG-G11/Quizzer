import React, { ReactNode } from 'react';
import { useFormikContext } from 'formik';
import { ButtonProps } from '@mui/material';
import { Button } from '../../../mui';

interface SubmitProps extends ButtonProps {
  children: ReactNode;
}

function Submit({ children, ...rest }: SubmitProps) {
  const { submitForm } = useFormikContext();

  const submitConfig = {
    onClick: () => submitForm(),
    ...rest,
  };

  return (
    <Button {...submitConfig}>{children}</Button>
  );
}

export default Submit;
