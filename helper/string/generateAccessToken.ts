import { IUser } from '@/types/UserService';
import jwt from 'jsonwebtoken';

export default function generateAccessToken(user: IUser) {
  const secretKey = process.env.REFRESH_KEY;
  if (secretKey) {
    return jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: '15m',
    });
  }
}
