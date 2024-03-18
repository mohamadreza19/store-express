import { IProduct } from '@/types/Services';
import mongoose, { Model, Schema, InferSchemaType } from 'mongoose';

const productModel = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
    unique: true,
  },
  off_price: {
    type: Number,
    required: true,
  },
  off_precent: {
    type: Number,
    required: true,
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

const Product = mongoose.model('Products', productModel);

export type ProductDocument = Model<InferSchemaType<typeof productModel>>;

export default Product;
