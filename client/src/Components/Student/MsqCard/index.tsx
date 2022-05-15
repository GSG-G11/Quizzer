/* eslint-disable max-len */
import { CheckCircle, LensTwoTone } from '@mui/icons-material';
import {
  Container,
  FormControlLabel, Radio, RadioGroup, Typography,
} from '@mui/material';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '../../../mui';

function MsqCard() {
  const { state: { quiz: { questions } } } = useLocation() as any;
  const [chosenAnswer, setChosenAnswer] = useState<string>('');
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);

  const chooseAnswer = ({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setAnsweredQuestions((prev) => [...prev, [{ [value.slice(0, value.indexOf('?'))]: value.slice(value.indexOf('?') + 1) }]]);
    setChosenAnswer(value);
    const isCorrect = value.slice(value.indexOf('?') + 1) === correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <>
      {questions.map(({ question, answers: { options } }:any) => (
        <Stack key={options} spacing={4} alignItems="center" direction="column">
          <Typography>{question.question}</Typography>

          <Container maxWidth="md">
            {options.map((option:string) => (
              <RadioGroup key={option} value={chosenAnswer} onChange={chooseAnswer}>
                <FormControlLabel
                  onClick={() => setCorrectAnswer(question.correctAnswer)}
                  control={<Radio size="medium" color="secondary" />}
                  value={question.question + option}
                  label={option}
                  sx={{ border: 'solid 0.5px', marginBlock: '0.5rem' }}
                />
              </RadioGroup>
            ))}
          </Container>

        </Stack>
      ))}
    </>
  );
}

export default MsqCard;
