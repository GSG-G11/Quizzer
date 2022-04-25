import { Router } from 'express';
import { profile, createQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/profile', checkAuth('teacher'), profile);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
