import React, { useContext } from 'react';
import classes from './QuestionTypeModal.module.css';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
  Card,
  CardActionArea,
  Typography,
  RadioButtonCheckedIcon,
  CheckCircleIcon,
  ShortTextIcon,
} from '../../../mui';
import { QuizContext } from '../../../Pages/Teacher/CreateQuiz';

const questionTypes = [
  { name: 'mcq', label: 'Multiple Choice', icon: <RadioButtonCheckedIcon className={classes.icon} /> },
  { name: 'true_false', label: 'True / False', icon: <CheckCircleIcon className={classes.icon} /> },
  { name: 'short_answer', label: 'Short Answer', icon: <ShortTextIcon className={classes.icon} /> },
];

function QuestionTypeModal() {
  const {
    questionTypeModalOpen,
    setQuestionTypeModalOpen,
    setQuestionType,
  } = useContext(QuizContext);

  return (
    <Dialog open={questionTypeModalOpen} onClose={() => setQuestionTypeModalOpen(false)}>
      <DialogTitle className={classes.title} style={{ paddingBottom: '5px', textAlign: 'center' }}>Question Type</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.description} style={{ paddingBottom: '1rem', textAlign: 'center' }}>
          Select the type of question you want to add.
        </DialogContentText>
        <Stack direction="row" spacing={2}>
          {
            questionTypes.map(({ name, label, icon }) => (
              <Card key={name}>
                <CardActionArea onClick={() => {
                  setQuestionType(name);
                  setQuestionTypeModalOpen(false);
                }}
                >
                  <Stack justifyContent="center" alignItems="center" padding="1rem">
                    <Typography marginBottom="0.5rem">{icon}</Typography>
                    <DialogContentText className={classes.label}>{label}</DialogContentText>
                  </Stack>
                </CardActionArea>
              </Card>
            ))
          }
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default QuestionTypeModal;
