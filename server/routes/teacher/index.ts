import { Router } from 'express';
import { quizzes, profile } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();
router.get('/quizzes', checkAuth('teacher'), quizzes);
router.get('/profile', checkAuth('teacher'), profile);

export default router;
