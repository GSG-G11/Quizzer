import { Router } from 'express';
import { checkAuth } from '../../middlewares';
import { createQuiz, profile } from '../../controllers';

const router = Router();

router.get('/profile', checkAuth('teacher'), profile);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
