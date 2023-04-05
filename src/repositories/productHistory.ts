import { productHistory } from './entityAccess';
import { IProductHistory } from '@interfaces/product';

const createProductHistory = async (payload: IProductHistory) => productHistory.create({ ...payload });

export { createProductHistory };
