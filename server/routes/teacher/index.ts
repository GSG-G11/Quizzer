import { Router } from 'express';
import {
  deleteQuiz, createQuiz, getQuizzes, getEnrolledStudents, getProfile,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/enrolled-students/:quizId', checkAuth('teacher'), getEnrolledStudents);

router.get('/profile', checkAuth('teacher'), getProfile);
router.delete('/quiz/:quizId', checkAuth('teacher'), deleteQuiz);
router.get('/quizzes', checkAuth('teacher'), getQuizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
