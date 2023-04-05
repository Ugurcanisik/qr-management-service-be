import { category } from './entityAccess';

const getAllCategory = async () => category.findAll({ order: [['rank', 'DESC']] });

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

export { getAllCategory, getCategoryByCategoryNumber, getCategoryByName };
