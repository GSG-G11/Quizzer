import { Router } from 'express';
import { logOut } from '../../controllers';

const router = Router();

router.get('/logout', logOut);

export default router;
