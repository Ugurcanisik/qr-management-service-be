import { Router } from 'express';
import { user as userController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';

const route = Router();

route.get('/', authMW(), userController.getAllUsers);

// import { matchedData } from 'express-validator';
// const data = matchedData(req, { locations: ['params'] });
// users/:userNumber daki userNumber almak için yukarı kod bloğunu kullanabilirsiniz.

export default route;
