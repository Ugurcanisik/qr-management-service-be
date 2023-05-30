import { Router } from 'express';
import { category as categoryController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';
import { requestValidator } from '@middlewares/validation';
import * as categoryValidation from '@validations/category';

const route = Router();

route.get('/', authMW(), categoryController.getAllCategory);

route.get('/:categoryNumber', authMW(), requestValidator(categoryValidation.get), categoryController.getCategory);

route.post('/', authMW(), requestValidator(categoryValidation.create), categoryController.createCategory);

route.patch(
    '/:categoryNumber',
    authMW(),
    requestValidator(categoryValidation.update),
    categoryController.updateCategory
);

route.delete('/:categoryNumber', authMW(), requestValidator(categoryValidation.get), categoryController.deleteCategory);

export default route;
