import { Router } from 'express';
import { checkAuth } from '../../middlewares';
import { createQuiz } from '../../controllers';

const router = Router();

router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
