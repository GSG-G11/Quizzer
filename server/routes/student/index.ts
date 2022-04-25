import { Router } from 'express';
import {
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz, getQuestions,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/questions', checkAuth('student'), checkUserAttendQuiz, getQuestions);
router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
