import { Router } from 'express';
import { enrolledStudents, createQuiz } from '../../controllers';
import { checkAuth } from '../../middlewares';

const router = Router();

router.get('/enrolled-students/:quizId', checkAuth('teacher'), enrolledStudents);

router.post('/quiz', checkAuth('teacher'), createQuiz);

export default router;
