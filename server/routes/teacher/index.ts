import { Router } from 'express';
import { quizzes } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();
router.get('/quizzes', checkAuth('teacher'), quizzes);

export default router;
