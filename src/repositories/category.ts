import { category } from './entityAccess';
import { CategoryCreateDTO, CategoryUpdateDTO } from '@models/classes';
import { date as dateHelper } from '@helpers';

// select * from category where deletedAt=null order by rank asc
const getAllCategory = async () => category.findAll({ where: { deletedAt: null }, order: [['rank', 'ASC']] });

const getCategoryByCategoryNumber = async (categoryNumber: string) =>
    category.findOne({
        where: {
            categoryNumber
        },
        raw: true,
        nest: true
    });

const getCategoryByName = async (name: string) =>
    category.findOne({
        where: {
            name
        },
        raw: true,
        nest: true
    });

const createCategory = async (payload: CategoryCreateDTO) => category.create({ ...payload });

const updateCategory = async (payload: CategoryUpdateDTO) =>
    category.update(payload, { where: { categoryNumber: payload.categoryNumber } });

const deleteCategory = async (categoryNumber: string) =>
    category.update({ deletedAt: dateHelper.nowDateWithToDate() }, { where: { categoryNumber } });

const qrGetAllCategory = async () =>
    category.findAll({ where: { deletedAt: null, isActive: true }, order: [['rank', 'ASC']] });

export {
    getAllCategory,
    getCategoryByCategoryNumber,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategory,
    qrGetAllCategory
};
