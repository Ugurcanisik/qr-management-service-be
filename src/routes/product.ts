import { Router } from 'express';
import { product as productController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';
import { requestValidator } from '@middlewares/validation';
import * as productValidation from '@validations/product';

const route = Router();

route.get('/', authMW(), productController.getAllProducts);

route.get('/:productNumber', authMW(), requestValidator(productValidation.get), productController.getProduct);

route.post('/', authMW(), requestValidator(productValidation.create), productController.createProduct);

route.patch('/:productNumber', authMW(), requestValidator(productValidation.update), productController.updateProduct);

route.delete('/:productNumber', authMW(), requestValidator(productValidation.get), productController.deleteProduct);

export default route;
