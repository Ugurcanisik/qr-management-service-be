import PgDataSource from '../database/postgre';
import { User, Product, Category, ProductHistory } from '@entities';

const user = PgDataSource.getRepository(User);
const category = PgDataSource.getRepository(Category);
const product = PgDataSource.getRepository(Product);
const productHistory = PgDataSource.getRepository(ProductHistory);

export { user, category, product, productHistory };
