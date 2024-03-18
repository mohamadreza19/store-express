import { IFile } from '@/types/Services';
import mongoose, { Model, Schema, InferSchemaType } from 'mongoose';

const fileModel = new Schema<IFile>({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model('Files', fileModel);

export type FileDocument = Model<InferSchemaType<typeof fileModel>>;

export default File;
