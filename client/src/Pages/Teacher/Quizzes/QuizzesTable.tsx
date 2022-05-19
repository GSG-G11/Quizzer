import React from 'react';
import { Link } from 'react-router-dom';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import {
  Table, Paper, TablePagination, Box, TableContainer, Typography,
} from '../../../mui';
import { IQuizzes } from '../../../Contexts/Quizzes/interfaces';
import classes from './Quizzes.module.css';

interface ITableQuizzes {
  quizzes: IQuizzes | null;
  headers: string[];
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (page: number) => void;
}

function QuizzesTable({
  quizzes, headers, setPage, rowsPerPage, page, setRowsPerPage,
}:ITableQuizzes) {
  const { length: quizzesCount }:any = quizzes;

  const handleChangePage = (e: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            className={classes.table}
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHeader headers={headers} />
            {
            !quizzesCount
              ? (
                <Typography
                  padding="20px"
                  textAlign="center"
                  sx={{ width: { xs: '80%', sm: '186%' } }}
                >
                  You have no quiz, create a new quiz by click
                  <Link to="quiz/new">
                    <Typography
                      component="span"
                      color="error"
                      fontWeight="600"

                    >
                      {' '}
                      here
                    </Typography>

                  </Link>
                </Typography>
              )
              : (
                <TableContent
                  quizzes={quizzes}
                  headers={headers}
                  page={page}
                  rowsPerPage={rowsPerPage}
                />
              )
            }
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={quizzesCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={classes.pagination}
        />
      </Paper>
    </Box>
  );
}

export default QuizzesTable;
