import React, { useState } from 'react';
import classes from './QuestionForm.module.css';
import Question from '../Question';
import {
  Container,
  Select,
  FormControl,
  MenuItem,
  Stack,
  Typography,
} from '../../../mui';

function QuestionFormWrapper({ number }: { number: number }) {
  const [questionType, setQuestionType] = useState<'mcq' | 'true_false' | 'short_answer'>('mcq');

  return (
    <Container className={classes.container}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FormControl>
          <Select
            variant="standard"
            id="selectBox"
            value={questionType}
            onChange={(e: any) => setQuestionType(e.target.value)}
          >
            <MenuItem value="mcq">Multiple Choice</MenuItem>
            <MenuItem value="true_false">True / False</MenuItem>
            <MenuItem value="short_answer">Short Answer</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body1" component="div" color="primary.dark" fontSize="1.1rem">
          <Typography component="span" className={classes.questionMark}>1</Typography>
          {' '}
          Point
        </Typography>
      </Stack>
      <Question questionType={questionType} number={number} />
    </Container>
  );
}

export default QuestionFormWrapper;
