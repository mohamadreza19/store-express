import { Request, Response } from 'express';

import { ModelService } from '@/types/Services';

class UserConteoller {
  private userService: ModelService;

  constructor(userService: ModelService) {
    this.userService = userService;
  }

  getUsers = async (req: Request, res: Response) => {
    const records = await this.userService.find({}, 1, 10);
    console.log(records);
    res.status(200).json(records);
  };
}
export default UserConteoller;
