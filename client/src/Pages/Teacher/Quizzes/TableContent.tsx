import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography, TableRow, TableCell, TableBody,
  PersonIcon, DeleteIcon, Stack,
} from '../../../mui';
import DeleteQuizModal from './QuizDeleteModal';
import classes from './Quizzes.module.css';
import { ITableBody, IQuiz } from './interfaces';
import { copyToClipboard } from '../../../Utils';
import { useSnackBar } from '../../../Hooks';

function TableContent({
  quizzes, rowsPerPage, page, headers,
}:ITableBody) {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentQuizId, setCurrentQuizId] = useState<string>('');
  const { showSnackBar } = useSnackBar();

  const { length: quizzesCount }:any = quizzes;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - quizzesCount) : 0;

  return (
    <>
      <TableBody>
        {quizzes
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((quiz:IQuiz) => (
            <TableRow key={quiz.id} hover>
              {headers.map((header:any) => {
                if (header === 'description') return null;
                if (header === 'students_count') {
                  return (
                    <TableCell align="center">
                      <Typography
                        style={{ fontWeight: 600 }}
                      >
                        <Stack direction="row" alignItems="center" justifyContent="center">
                          <PersonIcon />
                          {quiz[header]}
                        </Stack>
                      </Typography>
                    </TableCell>
                  );
                }
                if (header === 'title') {
                  return (
                    <TableCell align="center">
                      <Typography
                        color="info"
                        style={{ cursor: 'pointer', fontWeight: 600 }}
                        className={classes.quizTitle}
                        onClick={() => navigate(`/teacher/quiz/${quiz.id}`, { state: { quizTitle: quiz.title, quizDesc: quiz.description } })}
                      >
                        {quiz[header].charAt(0).toUpperCase() + quiz[header].slice(1)}
                      </Typography>
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    align="center"
                  >
                    <Typography
                      onClick={() => copyToClipboard({ str: quiz[header], showSnackBar })}
                      style={{ fontWeight: 600, cursor: 'pointer' }}
                    >
                      {quiz[header]}
                    </Typography>
                  </TableCell>
                );
              })}
              <TableCell align="center">
                <DeleteIcon
                  color="error"
                  style={{ cursor: 'pointer' }}
                  className={classes.quizDeleteIcon}
                  onClick={() => {
                    setCurrentQuizId(quiz.id);
                    setDeleteModal(true);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        {emptyRows > 0 && (
        <TableRow>
          <TableCell colSpan={6} />
        </TableRow>
        )}
      </TableBody>
      <DeleteQuizModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        currentQuizId={currentQuizId}
        quizzes={quizzes}
      />
    </>

  );
}

export default TableContent;
