import { Router } from 'express';
import {
  leaderboard,
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail, getQuiz,
} from '../../controllers';

import { checkAuth } from '../../middlewares';

const router = Router();

router.route('/leaderboard/:quizTitle').get(leaderboard);

router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
