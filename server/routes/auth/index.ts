import { Router } from 'express';
import { signup, login, logOut } from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.get('/login', login);
router.get('/logout', logOut);

export default router;
