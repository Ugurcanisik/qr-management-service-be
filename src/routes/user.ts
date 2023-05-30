import { Router } from 'express';
import { user as userController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';
import { requestValidator } from '@middlewares/validation';
import * as userValidation from '@validations/user';

const route = Router();

route.get('/', authMW(), userController.getAllUsers);

route.get('/:userNumber', authMW(), requestValidator(userValidation.get), userController.getUser);

route.post('/', authMW(), requestValidator(userValidation.create), userController.createUser);

route.patch('/:userNumber', authMW(), requestValidator(userValidation.update), userController.updateUser);

route.delete('/:userNumber', authMW(), requestValidator(userValidation.get), userController.deleteUser);

export default route;
