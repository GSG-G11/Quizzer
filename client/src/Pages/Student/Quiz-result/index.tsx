import React from 'react';
import { useLocation } from 'react-router-dom';

function QuizResult() {
  const { state: { score } } = useLocation() as any;
  return (
    <div>
      you scored
      {score}
      out 10
    </div>
  );
}

export default QuizResult;
