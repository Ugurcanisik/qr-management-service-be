import { category as categoryRepository } from '@repositories';
import { NotFoundError } from '@models/classes';

const getAllCategory = async () => categoryRepository.getAllCategory();

const getCategory = async (categoryNumber: string) => {
    const category = await categoryRepository.getCategoryByCategoryNumber(categoryNumber);

    if (!category) {
        throw new NotFoundError({
            message: 'Category is not found'
        });
    }
    return category;
};

export { getAllCategory, getCategory };
