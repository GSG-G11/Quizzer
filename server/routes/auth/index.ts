import { Router } from 'express';
import { signup, logOut } from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.get('/logout', logOut);

export default router;
