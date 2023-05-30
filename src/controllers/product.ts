import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, InternalError, ProductCreateDTO, ProductUpdateDTO } from '@models/classes';
import { product as productService } from '@services';
import { matchedData } from 'express-validator';
import { plainToClass } from 'class-transformer';

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const data = await productService.getAllProducts();
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const getAllQrProductAndCategory = async (req: Request, res: Response) => {
    try {
        const data = await productService.getAllQrProductAndCategory();
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const getProduct = async (req: Request, res: Response) => {
    const { productNumber } = matchedData(req, { locations: ['params'] });
    try {
        const data = await productService.getProduct(productNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const createProduct = async (req: Request, res: Response) => {
    const requestData = plainToClass(ProductCreateDTO, matchedData(req, { locations: ['body'] }));

    try {
        const data = await productService.createProduct(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const updateProduct = async (req: Request, res: Response) => {
    const requestData = plainToClass(ProductUpdateDTO, matchedData(req, { locations: ['params', 'body'] }));

    try {
        await productService.updateProduct(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse());
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    const { productNumber } = matchedData(req, { locations: ['params'] });

    try {
        await productService.deleteProduct(productNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse());
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, getAllQrProductAndCategory };
