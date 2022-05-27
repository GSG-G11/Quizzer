import React from 'react';
import classes from './Question.module.css';
import {
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '../../../mui';

function TrueFalse({ num }: { num: number }) {
  return (
    <FormControl fullWidth>
      <TextField name={`question-${num}-type`} value="true_false" style={{ display: 'none' }} />
      <TextField className={classes.question} label="Question" variant="outlined" name={`question-${num}`} required />
      <RadioGroup name={`question-${num}-answer`}>
        <FormControlLabel value="true" control={<Radio />} label="True" />
        <FormControlLabel value="false" control={<Radio />} label="False" />
      </RadioGroup>
    </FormControl>
  );
}

export default TrueFalse;
