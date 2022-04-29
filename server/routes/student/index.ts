import { Router } from 'express';
import {
  getQuestions,
  leaderboard,
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz,
} from '../../controllers';

import { checkAuth } from '../../middlewares';

const router = Router();

router.route('/leaderboard/:quizTitle').get(leaderboard);
router.get('/quiz/:quizId', getQuiz);
router.use(checkAuth('student'));
router.get('/questions/:quizId', getQuestions);
router.post('/score', checkUserAttendQuiz, addPrivateQuizScore, sendEmail);

export default router;
