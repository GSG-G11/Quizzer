import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import React, { useState, SyntheticEvent, MouseEvent } from 'react';
import {
  Tabs, Tab, Box, Divider,
} from '../../../../mui';
import { IQuestion, IQuestions } from '../../../../Pages/Student/Quiz/interfaces';
import QuestionCard from '../QuestionCard';
import TabPanel from './TabPanel';

function Questions({
  questions, setAnswers, hasSubmitted, answers,
}:IQuestions) {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setQuestionNumber(newValue);
  };

  const nextQuestion = (_event:MouseEvent) => {
    const lastQuestion = +questionNumber >= questions.length - 1;
    !lastQuestion && setQuestionNumber((prev) => prev + 1);
  };
  const prevQuestion = (_event:MouseEvent) => {
    const firstQuestion = +questionNumber <= 0;
    !firstQuestion && setQuestionNumber((prev) => prev - 1);
  };
  return (

    <Box sx={{ width: '100%' }}>
      <Tabs
        value={questionNumber}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        allowScrollButtonsMobile
      >
        {questions?.map(({ question, id }:IQuestion, i:number) => (
          <Tab
            key={id}
            sx={{ color: answers[question] && 'secondary.main', fontWeight: 'bold' }}
            label={`Question ${i + 1}`}
            wrapped
          />
        ))}
      </Tabs>

      <Divider orientation="horizontal" flexItem />

      {questions?.map((question: IQuestion, i:number) => (
        <TabPanel value={questionNumber} index={i} key={question.id}>
          <QuestionCard
            qNumber={i + 1}
            question={question.question}
            options={question.answers.options}
            setAnswers={setAnswers}
            hasSubmitted={hasSubmitted}
            questionType={question.type}
            answers={answers}
          />
        </TabPanel>
      ))}

      <Stack direction="row" justifyContent="space-around" width="100%" mt="1rem">
        <Button size="small" color="secondary" sx={{ color: 'primary.dark' }} variant="outlined" onClick={prevQuestion} startIcon={<ArrowBackIcon />}>Back</Button>
        <Button size="small" sx={{ color: 'secondary.main' }} variant="contained" onClick={nextQuestion} endIcon={<ArrowForwardIcon />}>Next</Button>
      </Stack>
    </Box>
  );
}

export default Questions;
