import { Router } from 'express';
import { enrolledStudents } from '../../controllers';

const router = Router();

router.get('/enrolled-students/:quizId', enrolledStudents);

export default router;
