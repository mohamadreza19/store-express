import { UserConteoller } from '@/controllers';
import { UserDocument, UserModel } from '@/models';
import { ModelService } from '@/services';
import express from 'express';
const router = express.Router();

const userService = new ModelService(UserModel);

const userConteoller = new UserConteoller(userService);

router.get('/users', userConteoller.getUsers);

export default router;
