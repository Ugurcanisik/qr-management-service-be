import { product as productRepository } from '@repositories';

const getAllProducts = async () => productRepository.getAllProducts();

export { getAllProducts };
