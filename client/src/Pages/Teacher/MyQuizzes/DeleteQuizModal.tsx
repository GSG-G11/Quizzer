import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Divider, Button, Typography,
} from '../../../mui';
import { getQuizzes, useSnackBar } from '../../../Hooks';
import classes from './MyQuizzes.module.css';

interface IDeleteModal {
  deleteModal: boolean;
  setDeleteModal: (deleteModal: boolean) => void;
  currentQuizId: string;
  quizzes: any;
}

interface IQuiz {
  title: string
  id: string
  description: string
  students_count: number
}

function DeleteQuizModal({
  deleteModal, setDeleteModal, currentQuizId, quizzes,
}:IDeleteModal) {
  const { setQuizzes } = getQuizzes();
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const deleteQuiz = async (quizId:string) => {
    try {
      setDeleteModal(true);
      await axios.delete(`/api/v1/teacher/quiz/${quizId}`);
      setQuizzes(quizzes.filter((quiz:IQuiz) => quiz.id !== quizId));
      showSnackBar('Quiz deleted successfully!', 'info');
    } catch (err) {
      navigate('error');
    }
  };

  const handleSubmit = () => {
    deleteQuiz(currentQuizId);
    setDeleteModal(false);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  return (
    <Dialog
      open={deleteModal}
      onClose={() => setDeleteModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >

      <DialogTitle id="alert-dialog-title" style={{ fontSize: '25px', padding: '25px' }}>
        Are you sure to delete this Quiz?
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{ padding: '5px' }}>
          You will not be able to retrieve the test after deleting it, click confirm to delete.
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions style={{ padding: '20px' }}>
        <Button variant="outlined" onClick={handleCancel} className={classes.cancelDeleteBtn} color="secondary">Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} className={classes.confirmDeleteBtn}>  Confirm </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteQuizModal;
