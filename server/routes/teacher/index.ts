import { Router } from 'express';
import {
  deleteQuiz, createQuiz,
} from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.delete('/quiz/:quizId', checkAuth('teacher'), deleteQuiz);

router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
