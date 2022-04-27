import { Router } from 'express';
import {
  getQuizzes, createQuiz, getProfile, deleteQuiz,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/profile', checkAuth('teacher'), getProfile);
router.delete('/quiz/:quizId', checkAuth('teacher'), deleteQuiz);
router.get('/quizzes', checkAuth('teacher'), getQuizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
