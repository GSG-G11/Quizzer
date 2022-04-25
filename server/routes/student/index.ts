import { Router } from 'express';
import {
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
