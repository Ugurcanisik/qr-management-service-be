import { product } from './entityAccess';

const getAllProducts = async () => product.findAll({ order: [['rank', 'DESC']] });

const getProductByProductNumber = async (productNumber: string) =>
    product.findOne({
        where: {
            productNumber
        },
        raw: true,
        nest: true
    });

export { getAllProducts, getProductByProductNumber };
