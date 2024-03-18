export interface ProductRequestI extends Request {
  query: {
    page: string;
    limit: string;
  };
}
