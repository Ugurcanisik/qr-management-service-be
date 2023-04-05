import { Router } from 'express';
import { category as categoryController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';

const route = Router();

route.get('/', authMW(), categoryController.getAllCategory);

// import { matchedData } from 'express-validator';
// const data = matchedData(req, { locations: ['params'] });
// category/:categoryNumber daki categoryNumber almak için yukarı kod bloğunu kullanabilirsiniz.

export default route;
