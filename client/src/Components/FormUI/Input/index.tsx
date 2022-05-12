import React from 'react';
import { useField } from 'formik';
import { OutlinedTextFieldProps } from '@mui/material';
import { TextField } from '../../../mui';

interface InputProps extends OutlinedTextFieldProps {
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const [field, meta] = useField(name);

  const inputConfig = {
    error: false,
    helperText: '',
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    inputConfig.error = true;
    inputConfig.helperText = meta.error;
  }

  return (
    <TextField {...inputConfig} />
  );
}

export default Input;
