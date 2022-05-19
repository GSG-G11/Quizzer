/* eslint-disable react/no-unused-prop-types */
import axios from 'axios';
import React, { useEffect, useId, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Typography, Divider, Container, Stack,
} from '../../../mui';
import { useSnackBar } from '../../../Hooks';
import { copyToClipboard } from '../../../Utils';

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
  const { showSnackBar } = useSnackBar();

  const getEnrolledStudents = async () => {
    try {
      const { data: { data: enrolledStudents } } = await axios.get(`/api/v1/teacher/quiz/${quizId}/enrolled-students`);
      setStudents(enrolledStudents);
    } catch (err) {
      navigate('error');
    }
  };

  useEffect(() => {
    getEnrolledStudents();
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack spacing={3} alignItems="center" mt="3rem">
        <Typography variant="h4" fontWeight="500" letterSpacing="2px">{quizTitle || 'quiz title'}</Typography>
        <Typography variant="caption" fontSize="1rem" letterSpacing="2px">{quizDesc || 'quiz Desc'}</Typography>
        <Stack
          position="relative"
          onClick={() => copyToClipboard({ str: quizId, showSnackBar })}
          onMouseEnter={() => setIsShowCopyIcon(true)}
          onMouseLeave={() => setIsShowCopyIcon(false)}
          sx={{ cursor: 'pointer', '&:hover': { filter: 'opacity(0.5) blur(0.3px)' } }}
          direction="row"
          border="1px #aaa solid"
          boxShadow={isCopyIconShow ? '0px 0px 5px #aaa' : 'none'}
          p="1rem"
          spacing="6rem"
        >
          <Typography variant="caption" fontSize="1rem" fontWeight="bold" color="primary.dark">Code</Typography>
          <Divider flexItem orientation="vertical" />
          {isCopyIconShow && <ContentCopyIcon sx={{ position: 'absolute', left: '21%' }} />}
          <Typography variant="caption" fontWeight="bold" color="secondary.dark" sx={{ fontSize: { xs: '.7rem', md: '1rem' } }}>{quizId}</Typography>
        </Stack>

        <Stack alignItems="center" rowGap={3} boxShadow="0 10px 10px #aaa">
          <Typography bgcolor="primary.dark" color="secondary" p="0.5rem" width="100%" textAlign="center" variant="h5" borderRadius="4px 4px 0 0">Enrolled Students</Typography>
          <Stack direction="row" justifyContent="space-around" width="92%">
            <Typography variant="h6">Student Name</Typography>
            <Typography variant="h6">Score</Typography>
          </Stack>

          <Stack p="2rem" alignItems="flex-start" maxHeight="500px" overflow="auto" direction="row" divider={<Divider orientation="vertical" flexItem />} columnGap={20}>
            <Stack spacing={4} sx={{ transform: 'translate(120%)' }}>
              {students.map(({ username }:IEnrolledStudents) => <Typography key={useId()} variant="body1" fontWeight="bold" textAlign="right">{username}</Typography>)}
            </Stack>

            <Stack spacing={4} sx={{ transform: 'translate(-120%)' }}>
              {students.map(({ mark, student_score: studentScore }:IEnrolledStudents) => (
                <Typography key={useId()} variant="body1" textAlign="left" fontWeight="bold">
                  {studentScore}
                  /
                  {mark}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default EnrolledStudents;
