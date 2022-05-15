import React from 'react';
import classes from './QuestionForm.module.css';
import { QuizContext } from '../../../Pages/Teacher/CreateQuiz';
import {
  MultipleChoiceQuestionForm,
  TrueFalseQuestionForm,
  ShortAnswerQuestionForm,
} from '../QuestionsForms';
import {
  Container,
  Select,
  FormControl,
  MenuItem,
  Stack,
  Typography,
} from '../../../mui';

function QuestionFormWrapper() {
  const { questionType, setQuestionType } = React.useContext(QuizContext);

  return (
    <Container className={classes.container}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FormControl>
          <Select
            variant="standard"
            id="selectBox"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
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
      { questionType === 'mcq'
        ? <MultipleChoiceQuestionForm />
        : questionType === 'true_false'
          ? <TrueFalseQuestionForm />
          : <ShortAnswerQuestionForm /> }
    </Container>
  );
}

export default QuestionFormWrapper;
