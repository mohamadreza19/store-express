import { InferSchemaType, Model } from 'mongoose';

// MODEL
export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  off_price: number;
  off_precent: number;
  imgUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IFile {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
//

export interface Document extends Model<InferSchemaType> {}

// DB MODLE SERVICES
export interface ModelService {
  create(data: any): Promise<any>;
  findById(_id: string): Promise<any>;
  findOne(criteria: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
  find(
    criteria: any,
    skip: number,
    limit: number
  ): Promise<{ data: any[]; total: number }>;
  aggregate(pipeline: any[]): Promise<any[]>;
}
