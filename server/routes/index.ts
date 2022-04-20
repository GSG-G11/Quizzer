import { Router } from 'express';
import studentRouter from './student';
import teacherRouter from './teacher';

const router = Router();

router.use('/student', studentRouter);
router.use('/teacher', teacherRouter);

export default router;
