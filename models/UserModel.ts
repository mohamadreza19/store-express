import { IUser } from '@/types/Services';
import mongoose, { Model, Schema, InferSchemaType } from 'mongoose';

const userSchema = new Schema<IUser>({
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // phoneNumber: {
  //   type: String,
  //   required: false,
  // },
  // address: {
  //   street: { type: String },
  //   city: { type: String },
  //   state: { type: String },
  //   zipCode: { type: String },
  // },
  // role: {
  //   type: String,
  //   enum: ['customer', 'admin'],
  //   default: 'customer',
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Users', userSchema);

export type UserDocument = Model<InferSchemaType<typeof userSchema>>;

export default User;
