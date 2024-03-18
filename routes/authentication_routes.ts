import { AuthenticationController, UserConteoller } from '@/controllers';
import { UserModel } from '@/models';
import { ModelService } from '@/services';
import express from 'express';
const router = express.Router();

const userService = new ModelService(UserModel);

const authConteoller = new AuthenticationController(userService);

router.post('/login', authConteoller.login);
router.post('/register', authConteoller.register);
router.post('/refresh-token', authConteoller.refreshToken);

export default router;
