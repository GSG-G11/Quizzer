/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Typography, Container, Stack, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '../../../mui';
import { useSnackBar } from '../../../Hooks';
import { copyToClipboard, properCase } from '../../../Utils';
import { EnrolledStudentsSkeleton } from '../../../Components';

interface IEnrolledStudents {
  mark:number;
  student_score:number;
  username:string;
}

function EnrolledStudents() {
  const navigate = useNavigate();
  const { quizId = '' } = useParams();
  const { quizTitle, quizDesc } = useLocation().state || {} as any;
  const [isCopyIconShow, setIsShowCopyIcon] = useState(false);
  const [students, setStudents] = useState<[IEnrolledStudents]>([{ username: '', mark: 0, student_score: 0 }]);
  const [isLoading, setIsLoading] = useState(true);
  const { showSnackBar } = useSnackBar();

  const getEnrolledStudents = async () => {
    try {
      const { data: { data: enrolledStudents } } = await axios.get(`/api/v1/teacher/quiz/${quizId}/enrolled-students`);
      setStudents(enrolledStudents);
      setIsLoading(false);
    } catch (err) {
      navigate('error');
    }
  };

  const hasPassed = (score: number, mark: number) => score >= mark / 2;

  useEffect(() => {
    getEnrolledStudents();
  }, []);

  return (
    <Container maxWidth="sm">
      {isLoading && <EnrolledStudentsSkeleton />}
      {!isLoading && (
        <>
          <Stack alignItems="center" spacing={5} mt={5}>
            <Typography variant="h4" fontWeight="500" letterSpacing="2px">{properCase(quizTitle) || 'Quiz Title'}</Typography>
            <Typography variant="caption" fontSize="1rem" letterSpacing="2px">{quizDesc || 'Quiz Desc'}</Typography>
            <Stack
              position="relative"
              onClick={() => copyToClipboard({ str: quizId, showSnackBar })}
              onMouseEnter={() => setIsShowCopyIcon(true)}
              onMouseLeave={() => setIsShowCopyIcon(false)}
              sx={{ cursor: 'pointer', '&:hover': { filter: 'opacity(0.5) blur(0.3px)' } }}
              direction="row"
              border="1px #ddd solid"
              boxShadow={isCopyIconShow ? '0px 0px 5px #aaa' : 'none'}
              p="1rem"
              spacing="6rem"
              maxWidth="400px"
            >
              <Typography variant="caption" sx={{ fontSize: { xs: '.8rem', md: '1rem' } }} fontWeight="bold" color="primary.dark">
                Code
              </Typography>
              {isCopyIconShow && <ContentCopyIcon sx={{ position: 'absolute', left: '20%' }} />}
              <Typography variant="caption" fontWeight="bold" color="secondary.dark" sx={{ fontSize: { xs: '.7rem', md: '1rem' } }}>{quizId}</Typography>
            </Stack>
          </Stack>

          <TableContainer component={Paper} sx={{ maxWidth: 450, margin: '3rem auto' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.dark', color: 'white' }}>
                  <TableCell sx={{ textAlign: 'center', color: 'secondary.main' }} colSpan={4}>
                    {students.length}
                    {' '}
                    Enrolled Students
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {!students.length && (
                <TableRow>
                  <TableCell colSpan={3} sx={{ textAlign: 'center', color: 'primary.dark' }}>No students enrolled yet!</TableCell>
                </TableRow>
                )}

                {!!students.length && (
                <>
                  <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Student Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Score</TableCell>
                </>
                )}

                {students.map(({ username, mark, student_score: studentScore }, i) => (
                  <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ textAlign: 'center' }} align="right">{username}</TableCell>
                    <TableCell sx={{ textAlign: 'center', color: hasPassed(studentScore, mark) ? 'success.main' : 'error.main' }} align="right">{`${studentScore}/${mark}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </>
      )}
    </Container>

  );
}

export default EnrolledStudents;
