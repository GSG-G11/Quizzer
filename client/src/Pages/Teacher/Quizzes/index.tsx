import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizzesTable from './QuizzesTable';
import {
  Button, Typography, Container, AddIcon, Grid,
} from '../../../mui';

import classes from './Quizzes.module.css';
import { useQuizzes } from '../../../Hooks';

function MyQuizzes() {
  const navigate = useNavigate();
  const { quizzes } = useQuizzes();
  const headers = ['title', 'id', 'description', 'students_count'];

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        paddingBottom="40px"
        paddingTop="40px"
        color="primary"
      >
        My Quizzes
      </Typography>
      <Grid
        textAlign="end"
        paddingBottom="40px"
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          className={classes.addQuiz}
          onClick={() => navigate('quiz/new')}
        >
          Create Quiz
        </Button>
      </Grid>

      {quizzes
          && (
          <QuizzesTable
            quizzes={quizzes}
            headers={headers}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
          )}

    </Container>
  );
}

export default MyQuizzes;
