import { Container, RadioGroup, Typography } from '@mui/material';
import React, { ChangeEvent, useId } from 'react';
import { Stack } from '../../../mui';
import { IQuestionCard } from '../../../Pages/Student/Quiz/interfaces';
import Question from './Question';

function QuestionCard({
  question, options, setMsqAnswers, hasSubmitted, quizType, questionType,
}:IQuestionCard) {
  const chooseAnswer = ({ target: { value: chosenAnswer } }:ChangeEvent<HTMLInputElement>) => {
    setMsqAnswers((prev:{ _:string }) => ({ ...prev, [question]: chosenAnswer }));
  };

  const handleShortAnswer = ({ target: { value } }:any) => {
    setMsqAnswers((prev:{_:string}) => ({ ...prev, [question]: value }));
  };

  return (
    <Stack spacing={4} alignItems="center" direction="column">
      <Typography color="primary.dark" variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>{question}</Typography>

      <Container maxWidth="lg">
        <RadioGroup onChange={chooseAnswer}>
          {/* mcq / true-false question */}
          {!!options.length && options.map((option:string) => (
            <Question hasSubmitted={hasSubmitted} option={option} questionType key={option} />
          ))}

          {/* short answer question */}
          {!options.length && (
          <Question
            key={useId()}
            hasSubmitted={hasSubmitted}
            questionType={questionType}
            handleShortAnswer={handleShortAnswer}
          />
          )}
        </RadioGroup>
      </Container>

    </Stack>
  );
}

export default QuestionCard;
