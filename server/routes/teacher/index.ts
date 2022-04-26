import { Router } from 'express';
import { getQuizzes, createQuiz, getProfile } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/profile', checkAuth('teacher'), getProfile);
router.get('/quizzes', checkAuth('teacher'), getQuizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
