// export User
import type { Request } from 'express';

export interface UserRequestI extends Request {
  body: {
    password: string;
    username: string;
  };
}
export interface UserRegisterRequestI extends UserRequestI {
  body: {
    password: string;
    passwordCheck: string;
    username: string;
    email: string;
  };
}
export interface UserRefreshTokenRequestI extends Request {
  body: {
    refreshToken: string;
  };
}
