import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import type {
  UserRefreshTokenRequestI,
  UserRegisterRequestI,
  UserRequestI,
} from '@/types/AuthenticationController';

import generateAccessToken from '@/helper/string/generateAccessToken';
import generateRefreshToken from '@/helper/string/generateRefreshToken';
import { ModelService } from '@/types/Services';

class AuthenticationController {
  private userService: ModelService;

  constructor(userService: ModelService) {
    this.userService = userService;
  }

  login = async (req: UserRequestI, res: Response) => {
    const { password, username } = req.body;

    if (!username) {
      return res.status(400).json('username is required');
    }
    if (!password) {
      return res.status(400).json('password is required');
    }

    try {
      const users = await this.userService.find({ username }, 0, 10);
      const user = users.data[0];
      if (!user) {
        return res.status(401).json({
          message: 'Invalid username or password',
        });
      }
      if (!password) {
        return res.status(401).json({
          message: 'Invalid username or password',
        });
      }
      const isPasswordMatch: boolean = await bcrypt.compareSync(
        password,
        user.password
      );
      if (!isPasswordMatch) {
        return res.status(401).json({
          message: 'Invalid username or password',
        });
      }
      // const accessToken = generateAccessToken(user);
      // const refreshToken = generateRefreshToken(user);
      // console.log('passwordMatch' + passwordMatch);
      // res.json({ accessToken, refreshToken });
    } catch (error) {
      console.log('Internal Error AuthenticationController 43:' + error);
    }

    // console.log(records);
  };
  register = async (req: UserRegisterRequestI, res: Response) => {
    const { password, username, email, passwordCheck } = req.body;

    try {
      if (!username) {
        return res.status(400).json('username is required');
      }
      if (!password) {
        return res.status(400).json('password is required');
      }
      if (!email) {
        return res.status(400).json('email is required');
      }
      if (!passwordCheck) {
        return res.status(400).json('passwordCheck is required');
      }
      if (password !== passwordCheck) {
        return res.status(400).json('password and passwordCheck are not same');
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      // const user = await this.userService.createUser({
      //   username,
      //   password: hashedPassword,
      //   email,
      // });

      // res.status(201).json(user);
    } catch (error) {
      console.log('Internal Error' + error);
    }
  };
  refreshToken = async (req: UserRefreshTokenRequestI, res: Response) => {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: 'refreshToken is required',
      });
    }
    const secretKey = process.env.REFRESH_KEY;

    if (secretKey) {
      jwt.verify(refreshToken, secretKey, function (err, decoded) {
        console.log(err); // bar
        if (err) {
          return res.sendStatus(403);
        }

        // const accessToken = generateAccessToken(decoded as IUser);

        // res.json({ accessToken });
      });
    }
  };
}
export default AuthenticationController;
