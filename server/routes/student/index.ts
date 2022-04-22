import { Router } from 'express';
import { getQuiz } from '../../controllers';

const router = Router();

router.get('/quiz/:quizId', getQuiz);

export default router;
