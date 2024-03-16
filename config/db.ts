import mongoose from 'mongoose';

const connectDB = async () => {
  const Url: string | undefined =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGODB_URI_PROD
      : process.env.MONGODB_URI;
  console.log({ Url });
  if (!Url) {
    console.error('MongoDB connection URL is not defined.');
    process.exit(1);
  }
  try {
    await mongoose.connect(Url);
    console.log('MongoDB connected');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
    process.exit(1);
  }
};

export default connectDB;
