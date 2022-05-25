import React from 'react';
import { FormControlLabel, Radio, TextField } from '@mui/material';

function QuestionInput({
  hasSubmitted, option, questionType, handleShortAnswer, question, answers,
}:any) {
  return (
    <FormControlLabel
      disabled={hasSubmitted}
      control={questionType === 'short_answer'
        ? <TextField placeholder="Enter your answer" fullWidth color="secondary" onChange={handleShortAnswer} autoComplete="off" value={answers[question]} />
        : <Radio sx={{ padding: '1.5rem 1rem' }} color="secondary" checked={answers[question] === option} />}
      value={option?.toString()} // * convert true/false values to string
      label={option?.toString()}
      sx={{
        border: 'solid 0.5px', marginBlock: '0.5rem', borderRadius: '4px',
      }}
    />
  );
}
export default QuestionInput;
