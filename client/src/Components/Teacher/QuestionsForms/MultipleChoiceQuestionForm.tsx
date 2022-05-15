import React, { useState } from 'react';
import { object, string } from 'yup';
import { Button } from '../../../mui';
import { Form, Input, Submit } from '../../FormUI';
import classes from './QuestionsForms.module.css';

function MultipleChoiceQuestionForm() {
  const [optionsString, setOptionsString] = useState<string>('{"option1": ""}');
  const optionValidation = string().required('Option is required');
  const initialValues = { question: '', ...JSON.parse(optionsString) };
  const optionsArray = Object.keys(JSON.parse(optionsString));
  const options = optionsArray.map((option) => `${option}`);
  const optionsObjects = [...options.map((option) => ({ [option]: optionValidation }))];
  let optionsObject = {};
  optionsObjects.forEach((option) => { optionsObject = { ...optionsObject, ...option }; });

  return (
    <Form
      onSubmit={(values: any) => console.log(values)}
      initialValues={initialValues}
      validationSchema={object({
        question: string().required('Question is required'),
        ...optionsObject,
      })}
    >
      <div className={classes.inputsWrapper}>
        <Input
          variant="outlined"
          name="question"
          label="Question"
          placeholder="Enter question"
          fullWidth
        />
        {
          options.map((option, idx) => (
            <Input
              key={option}
              variant="outlined"
              name={option}
              label={`Option ${idx + 1}`}
              placeholder={`Enter option ${idx + 1}`}
              fullWidth
            />
          ))
        }
        <Button
          variant="contained"
          onClick={() => {
            setOptionsString(`${optionsString.slice(0, -1)},"option${options.length + 1}":""}`);
          }}
        >
          Add Option
        </Button>
        <Submit variant="contained" style={{ display: 'block' }}>Submit</Submit>
      </div>
      hello world
    </Form>
  );
}

export default MultipleChoiceQuestionForm;
