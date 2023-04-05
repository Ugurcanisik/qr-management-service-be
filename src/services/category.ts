import { category as categoryRepository } from '@repositories';

const getAllCategory = async () => categoryRepository.getAllCategory();

export { getAllCategory };
