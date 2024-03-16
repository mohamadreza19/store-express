import { UserModelI } from '@/models';
export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UsersOption {
  page?: number;
  limit?: number;
}
export interface UserOption {
  username?: string;
  _id?: string;
}
export interface UserCreateOption extends UserOption {
  password?: string;
  email?: sting;
}

type Meta = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};
type Data = object[];
export interface UserServiceI {
  getUsers(option: UsersOption): Promise<{
    meta: Meta;
    data: Data;
  }>;
  getUser(option: UserOption): Promise<IUser | null>;
  createUser(option: UserCreateOption): Promise<T | undefined>;
}
