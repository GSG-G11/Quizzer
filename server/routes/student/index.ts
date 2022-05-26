import { Router } from 'express';

import {
  leaderboard,
  getQuiz,
  updateLeaderboard,
  getQuestions,
  checkUserAttendQuiz,
  addPrivateQuizScore,
  sendEmail,
  getStudentProfile,
  editStudentProfile,
  getStdPublicQuizzes,
} from '../../controllers';

import checkAuth from '../../middlewares/auth';

const router = Router();

router
  .route('/leaderboard/:quizTitle')
  .get(leaderboard)
  .post(checkAuth('student'), updateLeaderboard);
router.get('/quiz/:quizId', getQuiz);
router.use(checkAuth('student'));
router.get('/public-quizzes', getStdPublicQuizzes);
router.get('/questions/:quizId', getQuestions);
router.route('/profile').get(getStudentProfile).patch(editStudentProfile);
router.post('/score', checkUserAttendQuiz, addPrivateQuizScore, sendEmail);

export default router;
