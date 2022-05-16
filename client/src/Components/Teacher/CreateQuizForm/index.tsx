import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  Stack, MenuItem, Select, FormControl, InputLabel,
} from '../../../mui';
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
        questionsNumber: '',
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
        <Stack direction="row" spacing={2}>
          <Input
            fullWidth
            label="Quiz Duration"
            placeholder="Quiz duration in minutes..."
            type="number"
            name="time"
            variant="outlined"
          />
          <Input
            fullWidth
            label="Questions Number"
            placeholder="Number of questions..."
            type="number"
            name="questionsNumber"
            variant="outlined"
          />
        </Stack>
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
