import { Router } from 'express';
import { HttpStatusCode } from '@constants';

const route = Router();

route.get('/health-check', async (req, res) => res.status(HttpStatusCode.OK).json());

export default route;
