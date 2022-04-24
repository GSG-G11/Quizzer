import { Router } from 'express';
import { leaderboard, getQuiz, updateLeaderboard } from '../../controllers';

const router = Router();

router.route('/leaderboard/:quizTitle').get(leaderboard).post(updateLeaderboard);

router.get('/quiz/:quizId', getQuiz);

export default router;
