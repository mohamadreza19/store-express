import { IUser } from '@/types/UserService';
import jwt from 'jsonwebtoken';

export default function generateRefreshToken(user: IUser) {
  const secretKey = process.env.REFRESH_KEY;
  if (secretKey) {
    return jwt.sign({ userId: user._id }, secretKey);
  }
}
