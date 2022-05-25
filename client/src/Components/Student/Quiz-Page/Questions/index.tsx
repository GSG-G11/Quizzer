import React, { useState, SyntheticEvent } from 'react';
import {
  Tabs, Tab, Box, Divider,
} from '../../../../mui';
import { IQuestion, IQuestions } from '../../../../Pages/Student/Quiz/interfaces';
import QuestionCard from '../QuestionCard';
import TabPanel from './TabPanel';

function Questions({
  questions, setAnswers, hasSubmitted, answers,
}:IQuestions) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ width: '100%' }} component="div">
      <Tabs
        value={value || 0}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        allowScrollButtonsMobile
      >
        {questions.map(({ question }:IQuestion, i:number) => (
          <Tab
            key={question}
            sx={{ color: answers[question] && 'secondary.main', fontWeight: 'bold' }}
            label={`Question ${i + 1}`}
            wrapped
          />
        ))}
      </Tabs>

      <Divider orientation="horizontal" flexItem />

      {questions.map((question: IQuestion, i:number) => (
        <TabPanel value={value || 0} index={i} key={question.question}>
          <QuestionCard
            key={question.question}
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

    </Box>
  );
}

export default Questions;
