import { ProductConteoller } from '@/controllers';
import { ProductModel } from '@/models';
import { ModelService } from '@/services';
import express from 'express';
const router = express.Router();

const productService = new ModelService(ProductModel);

const productConteoller = new ProductConteoller(productService);

router.get('/products', productConteoller.getProducts);

export default router;
