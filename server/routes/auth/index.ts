import { Router } from 'express';
import { signup, login } from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.get('/login', login);

export default router;
