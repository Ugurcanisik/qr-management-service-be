import { product as productRepository, category as categoryRepositort } from '@repositories';
import { ProductUpdateDTO, ProductCreateDTO, NotFoundError } from '@models/classes';
import { common as commonUtil } from '@utils';

const getAllProducts = async () => productRepository.getAllProducts();

const getProduct = async (productNumber: string) => {
    const product = await productRepository.getProductByProductNumber(productNumber);

    if (!product) {
        throw new NotFoundError({
            message: 'Product is not found'
        });
    }
    return product;
};

const createProduct = async (payload: ProductCreateDTO) => {
    const productNumber = commonUtil.generateRandomString();

    return productRepository.createProduct({ productNumber, ...payload });
};

const updateProduct = async (payload: ProductUpdateDTO) => productRepository.updateProduct(payload);

const deleteProduct = async (categoryNumber: string) => productRepository.deleteProduct(categoryNumber);

const getAllQrProductAndCategory = async () => {
    const category = await categoryRepositort.qrGetAllCategory();

    const productArray = [];

    for (let i = 0; i < category.length; i++) {
        const categoryNumber = category[i].categoryNumber;
        const name = category[i].name;
        const products = await productRepository.findProductsByCategoryNumber(categoryNumber);

        const productPush = {
            categoryName: name,
            categorySeoUrl: name,
            products
        };

        productArray.push(productPush);
    }
    return {
        category,
        products: productArray
    };
};

export { getAllProducts, createProduct, deleteProduct, updateProduct, getProduct, getAllQrProductAndCategory };
