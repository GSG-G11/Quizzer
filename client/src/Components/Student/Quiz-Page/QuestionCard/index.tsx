import React, { ChangeEvent } from 'react';
import {
  Stack, Container, RadioGroup, Typography,
} from '../../../../mui';
import { IQuestionCard } from '../../../../Pages/Student/Quiz/interfaces';
import QuestionInput from './QuestionInput';

function QuestionCard({
  question, options, setAnswers, hasSubmitted, questionType, qNumber, answers,
}:IQuestionCard) {
  const chooseAnswer = ({ target: { value: chosenAnswer } }:ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev:{ _:string }) => ({ ...prev, [question]: chosenAnswer }));
  };

  const handleShortAnswer = ({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev:{_:string}) => ({ ...prev, [question]: value }));
  };

  return (
    <Stack spacing={4} alignItems="center" direction="column" component="div">
      <Typography alignSelf="flex-start" color="primary.dark" variant="h6" sx={{ fontSize: { xs: '.9rem', md: '1.25rem' } }} component="span">
        {qNumber}
        -
        {' '}
        {question}
      </Typography>

      <Container maxWidth="lg">
        <RadioGroup onChange={chooseAnswer}>
          {/* mcq / true-false question */}
          {questionType !== 'short_answer' && options.map((option:string) => (
            <QuestionInput
              key={option}
              hasSubmitted={hasSubmitted}
              option={option}
              questionType={questionType}
              answers={answers}
              question={question}
            />
          ))}

          {/* short answer question */}
          {questionType === 'short_answer' && (
          <QuestionInput
            hasSubmitted={hasSubmitted}
            questionType={questionType}
            handleShortAnswer={handleShortAnswer}
            answers={answers}
            question={question}
          />
          )}
        </RadioGroup>
      </Container>

    </Stack>
  );
}

export default QuestionCard;
