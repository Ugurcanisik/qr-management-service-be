import { Router } from 'express';
import { product as productController } from '@controllers';

const route = Router();

route.get('/', productController.getAllQrProductAndCategory);

export default route;
