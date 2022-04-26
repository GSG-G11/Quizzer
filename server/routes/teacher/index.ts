import { Router } from 'express';
import { checkAuth } from '../../middlewares';
import { createQuiz, getProfile } from '../../controllers';

const router = Router();

router.get('/profile', checkAuth('teacher'), getProfile);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
