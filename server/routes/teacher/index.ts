import { Router } from 'express';

import {
  deleteQuiz,
  createQuiz,
  getQuizzes,
  getEnrolledStudents,
  getProfile,
  editProfile,
} from '../../controllers';

import checkAuth from '../../middlewares/auth';

const router = Router();

router.use(checkAuth('teacher'));
router.get('/quiz/:quizId/enrolled-students', getEnrolledStudents);
router.route('/profile').get(getProfile).patch(editProfile);
router.get('/quizzes', getQuizzes);
router.post('/quiz', createQuiz);
router.delete('/quiz/:quizId', deleteQuiz);

export default router;
