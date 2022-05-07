import { Router } from 'express';
import {
  signup,
  login,
  logout,
  getUser,
} from '../../controllers';

const router = Router();

router.get('/is-auth', getUser);
router.get('/logout', logout);
router.post('/login', login);
router.post('/signup', signup);

export default router;
