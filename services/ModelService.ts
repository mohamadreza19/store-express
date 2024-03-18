import { UserDocument } from '@/models';
import { Document, IUser, ModelService } from '@/types/Services';

import { Model } from 'mongoose';

class UserService implements ModelService {
  private userModel: Document;
  constructor(User: Document) {
    this.userModel = User;
  }

  async find(
    criteria: any,
    page: number,
    limit: number
  ): Promise<{ data: IUser[]; total: number }> {
    const total = await this.userModel.countDocuments(criteria);

    const data = await this.userModel.find(criteria).skip(page).limit(limit);

    return {
      total,
      data,
    };
  }
  async create(data: any) {
    return Promise.reject('need implant');
  }
  async findOne(criteria: any) {
    const data = await this.userModel.findOne(criteria);

    return data;
  }
  update(id: string, data: any) {
    return Promise.reject('need implant');
  }
  async findById(_id: string) {
    const data = await this.userModel.findById(_id);

    return data;
  }
  delete(id: string) {
    return Promise.reject('need implant');
  }
  aggregate(pipeline: any[]) {
    return Promise.reject('need implant');
  }
}

export default UserService;
