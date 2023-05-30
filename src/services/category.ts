import { category as categoryRepository } from '@repositories';
import { NotFoundError, CategoryCreateDTO, CategoryUpdateDTO } from '@models/classes';
import { common as commonUtil } from '@utils';

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

const createCategory = async (payload: CategoryCreateDTO) => {
    const categoryNumber = commonUtil.generateRandomString();
    return categoryRepository.createCategory({ categoryNumber, ...payload });
};

const updateCategory = async (payload: CategoryUpdateDTO) => categoryRepository.updateCategory(payload);

const deleteCategory = async (categoryNumber: string) => categoryRepository.deleteCategory(categoryNumber);

export { getAllCategory, getCategory, createCategory, updateCategory, deleteCategory };
