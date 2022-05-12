import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Submit } from '../../FormUI';
import { searchForPrivateQuizSchema } from '../../../Validation';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  QrCodeIcon,
  InputAdornment,
} from '../../../mui';
import { useSnackBar } from '../../../Hooks';

interface PrivateQuizFormProps {
  codeFormOpen: boolean;
  setCodeFormOpen: (codeFormOpen: boolean) => void;
}

function PrivateQuizForm({ codeFormOpen, setCodeFormOpen }: PrivateQuizFormProps) {
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const handleClose = () => setCodeFormOpen(false);

  const initialValues = { quizId: '' };
  const getQuizData = async ({ quizId }: { quizId: string }) => {
    try {
      const { data: { data: quiz } } = await axios.get(`/api/v1/student/quiz/${quizId}`);
      navigate('/student/quiz-details', { state: { quiz } });
      setCodeFormOpen(false);
    } catch (err: any) {
      showSnackBar('Invalid Quiz Code', 'error');
    }
  };

  return (
    <Dialog open={codeFormOpen} onClose={handleClose}>
      <Form
        initialValues={initialValues}
        validationSchema={searchForPrivateQuizSchema}
        onSubmit={(values) => getQuizData(values)}
      >
        <DialogTitle style={{ paddingBottom: '5px' }}>Enter Code</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ paddingBottom: '5px' }}>
            Enter the code you received from your teacher.
          </DialogContentText>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Input
                name="quizId"
                variant="outlined"
                placeholder="Enter Code"
                label="Quiz Code"
                type="text"
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <QrCodeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Submit color="secondary" variant="contained">Attempt</Submit>
            </Grid>
          </Grid>
        </DialogContent>
      </Form>
    </Dialog>
  );
}

export default PrivateQuizForm;
