import React from 'react';
import { FormControlLabel, Radio, TextField } from '@mui/material';

function Question({
  hasSubmitted, option, questionType, handleShortAnswer,
}:any) {
  return (
    <FormControlLabel
      disabled={hasSubmitted}
      key={option}
      control={questionType === 'short_answer'
        ? <TextField placeholder="Enter your answer" fullWidth color="secondary" onChange={handleShortAnswer} autoComplete="off" />
        : <Radio sx={{ padding: '1.5rem 1rem' }} color="secondary" />}
      value={option?.toString()}
      label={option?.toString()}
      sx={{ border: 'solid 0.5px', marginBlock: '0.5rem', borderRadius: '4px' }}
    />
  );
}
export default Question;
