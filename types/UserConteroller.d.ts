// export User
import type { Request } from 'express';

export interface UserRequestI extends Request {
  query: {
    page: string;
    limit: string;
  };
}
