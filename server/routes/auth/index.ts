import { Router } from 'express';
import {
  signup,
  login,
  logOut,
  getUser,
} from '../../controllers';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logOut);
router.get('/is-auth', getUser);

export default router;
