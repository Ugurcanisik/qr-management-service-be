import { Router } from 'express';
import internalRoutes from './internal';
import authenticationRoute from './authentication';
import productRoute from './product';
import categoryRoute from './category';
import userRoute from './user';
import qrRoute from './qr';

const appRoute = Router();

appRoute.use('/internal', internalRoutes);
appRoute.use('/authentication', authenticationRoute);
appRoute.use('/products', productRoute);
appRoute.use('/category', categoryRoute);
appRoute.use('/users', userRoute);
appRoute.use('/qr', qrRoute);

export default appRoute;
