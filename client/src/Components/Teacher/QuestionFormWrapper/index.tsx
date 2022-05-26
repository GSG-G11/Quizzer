import React, { useState } from 'react';
import { useConfirm } from 'material-ui-confirm';
import classes from './QuestionForm.module.css';
import Question from '../Question';
import {
  Container,
  Select,
  FormControl,
  MenuItem,
  Stack,
  Typography,
  Box,
  RemoveCircleIcon,
} from '../../../mui';

function QuestionFormWrapper({ number, setQuestionsNumberArray, questionsNumberArray }:
   { number: number,
     setQuestionsNumberArray: (_: number[]) => void,
     questionsNumberArray: number[]
   }) {
  const [questionType, setQuestionType] = useState<'mcq' | 'true_false' | 'short_answer'>('mcq');
  const confirm = useConfirm();

  const deleteQuestion = async () => {
    await confirm({ title: 'Confirm Delete Question', description: 'Are you sure that you want to delete this questions?' });
    setQuestionsNumberArray(
      questionsNumberArray.filter((num: number) => num !== number),
    );
  };

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
          <Stack direction="row" alignItems="center">
            <Box>
              <Typography component="span" className={classes.questionMark}>1</Typography>
              {' '}
              <span>Point</span>
            </Box>
            {
              questionsNumberArray.length > 1 && (
              <RemoveCircleIcon
                className={classes.deleteIcon}
                onClick={deleteQuestion}
                color="error"
              />
              )
            }
          </Stack>
        </Typography>
      </Stack>
      <Question questionType={questionType} number={number} />
    </Container>
  );
}

export default QuestionFormWrapper;
