import { Router } from 'express';
import {
  quizDetails, checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/quiz-data/:quizId', quizDetails);
router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
