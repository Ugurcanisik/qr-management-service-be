import { category, product } from './entityAccess';
import { ProductUpdateDTO, ProductCreateDTO } from '@models/classes';
import { date as dateHelper } from '@helpers';

const getAllProducts = async () =>
    product.findAll({ include: [category], where: { deletedAt: null }, order: [['rank', 'ASC']] });

const getProductByProductNumber = async (productNumber: string) =>
    product.findOne({
        where: {
            productNumber
        },
        raw: true,
        nest: true
    });

const createProduct = async (payload: ProductCreateDTO) => product.create({ ...payload });

const updateProduct = async (payload: ProductUpdateDTO) =>
    product.update(payload, { where: { productNumber: payload.productNumber } });

const deleteProduct = async (productNumber: string) =>
    product.update({ deletedAt: dateHelper.nowDateWithToDate() }, { where: { productNumber } });

const findProductsByCategoryNumber = (categoryNumber: string) =>
    product.findAll({ where: { categoryNumber, isActive: true, deletedAt: null }, order: [['rank', 'ASC']] });

export {
    getAllProducts,
    getProductByProductNumber,
    createProduct,
    updateProduct,
    deleteProduct,
    findProductsByCategoryNumber
};
