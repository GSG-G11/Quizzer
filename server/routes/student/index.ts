import { Router } from 'express';
import {
  getQuestions,
  leaderboard,
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz,
} from '../../controllers';

import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/questions/:quizId', checkAuth('student'), getQuestions);
router.route('/leaderboard/:quizTitle').get(leaderboard);

router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
