import { Router } from 'express';
import {
  leaderboard, getQuiz, updateLeaderboard,
  getQuestions,
  checkUserAttendQuiz, addPrivateQuizScore, sendEmail,
} from '../../controllers';

import { checkAuth } from '../../middlewares';

const router = Router();

router.route('/leaderboard/:quizTitle').get(leaderboard).post(checkAuth('student'), updateLeaderboard);

router.get('/questions/:quizId', checkAuth('student'), getQuestions);
router.route('/leaderboard/:quizTitle').get(leaderboard);

router.post('/score', checkAuth('student'), checkUserAttendQuiz, addPrivateQuizScore, sendEmail);
router.get('/quiz/:quizId', getQuiz);

export default router;
