import { Request, Response } from 'express';

import type { ProductRequestI } from '@/types/ProductController.d.ts';
import { Document, ModelService } from '@/types/Services';

class ProductContoller {
  private service: ModelService;

  constructor(service: ModelService) {
    this.service = service;
  }

  getProducts = async (req: Request, res: Response) => {
    try {
      const records = await this.service.find({}, 0, 10);

      res.status(200).json(records);
    } catch (error) {
      console.log(error);
    }
  };
}
export default ProductContoller;
