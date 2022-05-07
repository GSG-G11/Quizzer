import { Router } from 'express';
import {
  leaderboard,
  getQuiz,
  updateLeaderboard,
  getQuestions,
  checkUserAttendQuiz,
  addPrivateQuizScore,
  sendEmail,
} from '../../controllers';

import { checkAuth } from '../../middlewares';

const router = Router();

router
  .route('/leaderboard/:quizTitle')
  .get(leaderboard)
  .post(checkAuth('student'), updateLeaderboard);
router.get('/quiz/:quizId', getQuiz);
router.use(checkAuth('student'));
router.get('/questions/:quizId', getQuestions);
router.post('/score', checkUserAttendQuiz, addPrivateQuizScore, sendEmail);

export default router;
