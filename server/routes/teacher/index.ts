import { Router } from 'express';
import { myQuizzes } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();
router.get('/my-quizzes', (req, res, next) => checkAuth('teacher'), myQuizzes);

export default router;
