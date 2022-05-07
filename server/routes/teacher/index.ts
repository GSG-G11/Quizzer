import { Router } from 'express';
import {
  deleteQuiz,
  createQuiz,
  getQuizzes,
  getEnrolledStudents,
  getProfile,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.use(checkAuth('teacher'));
router.get('/quiz/:quizId/enrolled-students', getEnrolledStudents);
router.get('/profile', getProfile);
router.get('/quizzes', getQuizzes);
router.post('/quiz', createQuiz);
router.delete('/quiz/:quizId', deleteQuiz);

export default router;
