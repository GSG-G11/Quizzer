import React, { useState } from 'react';
import classes from './Question.module.css';
import {
  FormControl,
  TextField,
  RadioGroup,
  Stack,
  FormControlLabel,
  Radio,
  Button,
  Box,
  InputAdornment,
  RemoveCircleIcon,
} from '../../../mui';

function MCQ({ num }: { num: number }) {
  const [optionsCounter, setOptionsCounter] = useState<number>(3);
  const [optionsNumberArray, setOptionNumberArray] = useState<number[]>([1, 2]);

  const addOption = () => {
    setOptionsCounter((prev) => prev + 1);
    setOptionNumberArray((prev) => ([...prev, optionsCounter]));
  };

  const deleteOption = (number: number) => {
    setOptionNumberArray(
      optionsNumberArray.filter((optionNumber: number) => optionNumber !== number),
    );
  };

  return (
    <FormControl fullWidth>
      <TextField name={`question-${num}-type`} value="mcq" style={{ display: 'none' }} />
      <TextField className={classes.question} label="Question" variant="outlined" name={`question-${num}`} required />
      <RadioGroup name={`question-${num}-answer`}>
        {optionsNumberArray.map((optionNumber, idx) => (
          <Stack direction="row" className={classes.inputStack} key={optionNumber}>
            <FormControlLabel value={`q-${num}-answer-${optionNumber}`} control={<Radio />} label="" />
            <TextField
              label={`Option ${idx + 1}`}
              variant="outlined"
              name={`q-${num}-answer-${optionNumber}`}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {
                      optionsNumberArray.length > 2 && (
                      <RemoveCircleIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteOption(optionNumber)}
                        color="error"
                        className={classes.deleteBtn}
                      />
                      )
                    }
                  </InputAdornment>
                ),
              }}
              required
            />
          </Stack>
        ))}
        {
          optionsNumberArray.length < 7 && (
          <Box>
            <Button
              variant="contained"
              size="small"
              color="primary"
              style={{ marginLeft: '51px', marginTop: '0.4rem' }}
              onClick={addOption}
            >
              Add Option
            </Button>
          </Box>
          )
        }
      </RadioGroup>
    </FormControl>
  );
}

export default MCQ;
