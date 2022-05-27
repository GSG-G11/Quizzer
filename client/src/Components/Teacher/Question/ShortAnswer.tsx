import React from 'react';
import classes from './Question.module.css';
import {
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '../../../mui';

function ShortAnswer({ num }: { num: number }) {
  return (
    <FormControl fullWidth>
      <TextField name={`question-${num}-type`} value="short_answer" style={{ display: 'none' }} />
      <TextField className={classes.question} label="Question" variant="outlined" name={`question-${num}`} required />
      <TextField label="Correct Answer" variant="outlined" name={`question-${num}-answer`} required />
    </FormControl>
  );
}

export default ShortAnswer;
