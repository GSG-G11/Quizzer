import { Router } from 'express';
import { getEnrolledStudents, createQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/enrolled-students/:quizId', checkAuth('teacher'), getEnrolledStudents);

router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
