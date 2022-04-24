import { Router } from 'express';
import { signup, login, logOut } from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logOut);

export default router;
