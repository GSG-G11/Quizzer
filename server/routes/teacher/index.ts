import { Router } from 'express';
import { quizzes, createQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/quizzes', checkAuth('teacher'), quizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
