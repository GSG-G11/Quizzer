import React from 'react';
import classes from './Question.module.css';
import {
  Stack,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
} from '../../../mui';

function Question({ questionType, number }: { questionType: 'mcq' | 'true_false' | 'short_answer', number: number }) {
  const num = number + 1;

  return (
    <div>
      {
      questionType === 'mcq' ? (
        <FormControl fullWidth>
          <TextField name={`question-${num}-type`} value="mcq" style={{ display: 'none' }} />
          <TextField className={classes.question} label="question" variant="outlined" name={`question-${num}`} required />
          <RadioGroup name={`question-${num}-answer`}>
            <Stack direction="row" className={classes.inputStack}>
              <FormControlLabel value={`q-${num}-answer-1`} control={<Radio />} label="" />
              <TextField label="Option 1" variant="outlined" name={`q-${num}-answer-1`} required />
            </Stack>
            <Stack direction="row" className={classes.inputStack}>
              <FormControlLabel value={`q-${num}-answer-2`} control={<Radio />} label="" />
              <TextField label="Option 2" variant="outlined" name={`q-${num}-answer-2`} required />
            </Stack>
            <Stack direction="row" className={classes.inputStack}>
              <FormControlLabel value={`q-${num}-answer-3`} control={<Radio />} label="" />
              <TextField label="Option 3" variant="outlined" name={`q-${num}-answer-3`} required />
            </Stack>
            <Stack direction="row" className={classes.inputStack}>
              <FormControlLabel value={`q-${num}-answer-4`} control={<Radio />} label="" />
              <TextField label="Option 4" variant="outlined" name={`q-${num}-answer-4`} required />
            </Stack>
          </RadioGroup>
        </FormControl>
      ) : questionType === 'true_false'
        ? (
          <FormControl fullWidth>
            <TextField name={`question-${num}-type`} value="true_false" style={{ display: 'none' }} />
            <TextField className={classes.question} label="question" variant="outlined" name={`question-${num}`} required />
            <RadioGroup name={`question-${num}-answer`}>
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>
        )
        : (
          <FormControl fullWidth>
            <TextField name={`question-${num}-type`} value="short_answer" style={{ display: 'none' }} />
            <TextField className={classes.question} label="question" variant="outlined" name={`question-${num}`} required />
            <TextField label="Correct Answer" variant="outlined" name={`question-${num}-answer`} required />
          </FormControl>
        )
    }
    </div>
  );
}

export default Question;
