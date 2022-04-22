import { Router } from 'express';
import { leaderboard } from '../../controllers';

const router = Router();

router.route('/leaderboard').get(leaderboard);

export default router;
