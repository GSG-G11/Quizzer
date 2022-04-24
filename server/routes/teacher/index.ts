import { Router } from 'express';
import { quizzes, profile, deleteQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();
router.get('/quizzes', checkAuth('teacher'), quizzes);
router.get('/profile', checkAuth('teacher'), profile);
router.delete('/quiz/:quizId', checkAuth('teacher'), deleteQuiz);

export default router;
