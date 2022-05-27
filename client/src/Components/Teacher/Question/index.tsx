import React from 'react';
import MCQ from './MCQ';
import ShortAnswer from './ShortAnswer';
import TrueFalse from './TrueFalse';
import { Box } from '../../../mui';

function Question({ questionType, number }: { questionType: 'mcq' | 'true_false' | 'short_answer', number: number }) {
  const num = number + 1;

  return (
    <Box>
      {questionType === 'mcq'
        ? <MCQ num={num} />
        : questionType === 'true_false'
          ? <TrueFalse num={num} />
          : <ShortAnswer num={num} />}
    </Box>
  );
}

export default Question;
