import { Router } from 'express';
import { leaderboard, getQuiz } from '../../controllers';

const router = Router();

router.route('/leaderboard/:quizTitle').get(leaderboard);

router.get('/quiz/:quizId', getQuiz);

export default router;
