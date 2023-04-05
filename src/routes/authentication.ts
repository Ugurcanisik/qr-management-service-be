import { Router } from 'express';
import { authentication as authenticationController } from '@controllers';
import { requestValidator } from '@middlewares/validation';
import * as authValidation from '../validations/authentication';

const route = Router();

route.post('/login', requestValidator(authValidation.login), authenticationController.login);

export default route;
