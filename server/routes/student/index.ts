import { Router } from 'express';
import { quizDetails } from '../../controllers';

const router = Router();

router.get('/quiz-data/:quizId', quizDetails);

export default router;
