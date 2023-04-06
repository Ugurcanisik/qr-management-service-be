import { Router } from 'express';
import { category as categoryController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';
import { requestValidator } from '@middlewares/validation';
import * as categoryValidation from '@validations/category';

const route = Router();

route.get('/', categoryController.getAllCategory);

route.get('/:categoryNumber', requestValidator(categoryValidation.getCategory), categoryController.getCategory);

// import { matchedData } from 'express-validator';
// const data = matchedData(req, { locations: ['params'] });
// category/:categoryNumber daki categoryNumber almak için yukarı kod bloğunu kullanabilirsiniz.

export default route;
