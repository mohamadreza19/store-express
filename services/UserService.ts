import { UserDocument } from '@/models';

import type {
  UserServiceI,
  UsersOption,
  UserOption,
  UserCreateOption,
  IUser,
} from '@/types/UserService';
import { Document } from 'mongoose';

class UserService implements UserServiceI {
  private userModel: UserDocument;
  constructor(User: UserDocument) {
    this.userModel = User;
  }

  async getUsers(option: UsersOption) {
    const { page = 1, limit = 10 } = option;
    try {
      const totalCount = await this.userModel.countDocuments(); // Total number of documents

      const totalPages = Math.ceil(totalCount / limit); // Total pages

      // Calculate the number of documents to skip
      const skip = (page - 1) * limit;

      // Fetch users for the current page
      const users = await this.userModel.find().skip(skip).limit(limit);

      // Construct meta information object
      const meta = {
        totalCount,
        totalPages,
        currentPage: page,
        pageSize: limit,
      };

      return { meta, data: users };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Internal server error');
    }
  }
  async getUser(option: UserOption) {
    const { _id, username } = option;

    let user: IUser | null = null;

    try {
      if (_id) {
        user = await this.userModel.findOne({ _id });
      }
      if (username) {
        user = await this.userModel.findOne({ username });
      }
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Internal server error');
    }
  }
  async createUser(option: UserCreateOption) {
    const { username, email, password } = option;

    if (!email || !username || !password) {
      throw new Error('username or password or email is undefind');
    }

    try {
      const res = await this.userModel.create({
        username,
        email,
        password,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      return res;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Internal server error');
    }
  }
}

export default UserService;
