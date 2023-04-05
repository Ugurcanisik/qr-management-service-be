import { Router } from 'express';
import { product as productController } from '@controllers';
import { auth as authMW } from '@middlewares/authentication';

const route = Router();

route.get('/', authMW(), productController.getAllProducts);

// import { matchedData } from 'express-validator';
// const data = matchedData(req, { locations: ['params'] });
// products/:productNumber daki productNumber almak için yukarı kod bloğunu kullanabilirsiniz.

export default route;
