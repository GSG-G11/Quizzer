import React, { ChangeEvent, useId } from 'react';
import {
  Stack, Container, RadioGroup, Typography,
} from '../../../mui';
import { IQuestionCard } from '../../../Pages/Student/Quiz/interfaces';
import Question from './Question';

function QuestionCard({
  question, options, setAnswers, hasSubmitted, questionType, qNumber,
}:IQuestionCard) {
  const chooseAnswer = ({ target: { value: chosenAnswer } }:ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev:{ _:string }) => ({ ...prev, [question]: chosenAnswer }));
  };

  const handleShortAnswer = ({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev:{_:string}) => ({ ...prev, [question]: value }));
  };

  return (
    <Stack spacing={4} alignItems="center" direction="column">
      <Typography alignSelf="flex-start" color="primary.dark" variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
        {qNumber}
        -
        {' '}
        {question}
      </Typography>

      <Container maxWidth="lg">
        <RadioGroup onChange={chooseAnswer}>
          {/* mcq / true-false question */}
          {questionType !== 'short_answer' && options.map((option:string) => (
            <Question
              key={option}
              hasSubmitted={hasSubmitted}
              option={option}
              questionType
            />
          ))}

          {/* short answer question */}
          {questionType === 'short_answer' && (
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
