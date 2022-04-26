import { Router } from 'express';
import { getQuizzes, createQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/quizzes', checkAuth('teacher'), getQuizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
