import { AlertColor } from '@mui/material';
import { useSnackBar } from '../Hooks';

export const properCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

interface ICopyToClipboard {
  str: string;
  showSnackBar?: (text: string, typeColor: AlertColor) => void;
}

export const copyToClipboard = ({ str, showSnackBar }: ICopyToClipboard) => {
  str && navigator.clipboard.writeText(str);
  showSnackBar?.('copied to clipboard', 'success');
};

export const timer = ({
  examTime, setExamTime, hasSubmitted, submitAnswers,
}:any) => setInterval(() => {
  const { seconds: sec, minutes: min } = examTime;

  if (sec > 0) setExamTime(({ seconds, minutes }:any) => ({ minutes, seconds: seconds - 1 }));

  if (sec <= 0) {
    if (min <= 0) {
      clearInterval(
        timer({
          examTime,
          setExamTime,
          hasSubmitted,
          submitAnswers,
        }),
      );
      if (!hasSubmitted) submitAnswers({ hasPressedSubmitBtn: true });
    } else setExamTime(({ minutes }:any) => ({ minutes: minutes - 1, seconds: 59 }));
  }
}, 1000);
