import { Router } from 'express';
import { deleteQuiz, createQuiz, getQuizzes } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.delete('/quiz/:quizId', checkAuth('teacher'), deleteQuiz);
router.get('/quizzes', checkAuth('teacher'), getQuizzes);
router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
