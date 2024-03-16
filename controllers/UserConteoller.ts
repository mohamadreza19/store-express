import { Request, Response } from 'express';

import type { UserRequestI } from '@/types/UserConteroller';

import { UserServiceI } from '@/types/UserService';

class UserConteoller {
  private userService: UserServiceI;

  constructor(userService: UserServiceI) {
    this.userService = userService;
  }

  getUsers = async (req: UserRequestI, res: Response) => {
    const records = await this.userService.getUsers({
      limit: 10,
      page: 1,
    });
    console.log(records);
    res.status(200).json(records);
  };
}
export default UserConteoller;
