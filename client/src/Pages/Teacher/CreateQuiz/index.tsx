import React, { useState, useMemo, createContext } from 'react';
import { Container, Typography } from '../../../mui';
import { CreateQuizForm, QuestionTypeModal, QuestionFormWrapper } from '../../../Components';

const initialValues: any = {
  title: '',
  description: '',
  time: '',
  mark: 0,
  questions: [
    {
      question: '',
      type: '',
      answers: { answer: '', options: [] },
    },
  ],
};

export const QuizContext = createContext<any>(null!);

function CreateQuiz() {
  const [quiz, setQuiz] = useState<any>(initialValues);
  const [questionType, setQuestionType] = useState<'mcq' | 'true_false' | 'short_answer'>('mcq');
  const [questionTypeModalOpen, setQuestionTypeModalOpen] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    setQuiz({ ...quiz, ...values });
    setQuestionTypeModalOpen(true);
  };

  const memoizedQuiz = useMemo(
    () => (
      {
        quiz,
        questionTypeModalOpen,
        setQuestionTypeModalOpen,
        questionType,
        setQuestionType,
      }
    ),
    [quiz, questionType],
  );

  return (
    <QuizContext.Provider value={memoizedQuiz}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary.dark"
          textAlign="center"
          marginTop="2rem"
          gutterBottom
        >
          Create a new Quiz
        </Typography>
        {!quiz.title && <CreateQuizForm onSubmit={handleSubmit} />}
        {questionTypeModalOpen && <QuestionTypeModal />}
        {quiz.title && <QuestionFormWrapper />}
      </Container>
    </QuizContext.Provider>
  );
}

export default CreateQuiz;
