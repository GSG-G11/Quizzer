import React from 'react';
import { Stack } from '../../../mui';
import { Form, Input, Submit } from '../../FormUI';
import { createQuizSchema } from '../../../Validation';
import classes from './CreateQuizForm.module.css';

function CreateQuizForm({ onSubmit }: any) {
  return (
    <Form
      initialValues={{
        title: '',
        description: '',
        time: '',
      }}
      validationSchema={createQuizSchema}
      onSubmit={onSubmit}
    >
      <Stack className={classes.inputsWrapper}>
        <Input
          label="Quiz Name"
          placeholder="Quiz title..."
          type="text"
          name="title"
          variant="outlined"
        />
        <Input
          label="Quiz Description"
          placeholder="Quiz description..."
          type="text"
          name="description"
          variant="outlined"
        />
        <Input
          fullWidth
          label="Quiz Duration"
          placeholder="Quiz duration in minutes..."
          type="number"
          name="time"
          variant="outlined"
        />
        <Submit
          className={classes.submitBtn}
          color="primary"
          variant="contained"
          size="large"
        >
          Start
        </Submit>
      </Stack>
    </Form>
  );
}

export default CreateQuizForm;
