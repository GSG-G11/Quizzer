import { Router } from 'express';
import { checkUserAttendQuiz, addPrivateQuizScore, sendEmail } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);

export default router;
