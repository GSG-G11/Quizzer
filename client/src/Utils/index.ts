import { AlertColor } from '@mui/material';
import copy from 'copy-to-clipboard';
import { IApiPublicQuestions } from '../Pages/Student/Quiz/interfaces';

export const properCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

interface ICopyToClipboard {
  str: string;
  showSnackBar?: (text: string, typeColor: AlertColor) => void;
}

export const copyToClipboard = ({ str, showSnackBar }: ICopyToClipboard) => {
  str && copy(str);
  showSnackBar?.('Copied to clipboard', 'success');
};

export const timer = ({
  examTime, setExamTime, hasSubmitted, sendScore,
}: any) => setInterval(() => {
  const { seconds: sec, minutes: min } = examTime;

  if (sec > 0) {
    setExamTime(({ seconds, minutes }: { seconds: number; minutes: number }) => ({
      minutes,
      seconds: seconds - 1,
    }));
  }

  if (sec === 0) {
    if (min === 0) {
      clearInterval(
        timer({
          examTime,
          setExamTime,
          hasSubmitted,
          sendScore,
        }),
      );
      if (!hasSubmitted) sendScore({ hasPressedSubmitBtn: true });
    } else setExamTime(({ minutes }:any) => ({ minutes: minutes - 1, seconds: 59 }));
  }
}, 1000);

export const formatPublicQuestions = (questions: IApiPublicQuestions[]) => questions
  .map((question: IApiPublicQuestions) => ({
    id: `${question.id}`,
    question: question.question,
    type: 'mcq',
    answers: {
      answer: question.correctAnswer,
      options: [...question.incorrectAnswers, question.correctAnswer]
        .sort(() => 0.5 - Math.random()), // * shuffle answers
    },
  }));
