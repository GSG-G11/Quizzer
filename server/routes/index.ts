import { Router } from 'express';
import authRouter from './auth';
import studentRouter from './student';
import teacherRouter from './teacher';

const router = Router();

router.use('/auth', authRouter);
router.use('/student', studentRouter);
router.use('/teacher', teacherRouter);

export default router;
