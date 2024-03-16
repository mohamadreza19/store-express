import { UserConteoller } from '@/controllers';
import { UserModel } from '@/models';
import { UserService } from '@/services';
import express from 'express';
const router = express.Router();

const userService = new UserService(UserModel);

const userConteoller = new UserConteoller(userService);

router.get('/users', userConteoller.getUsers);

export default router;
