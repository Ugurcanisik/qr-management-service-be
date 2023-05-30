import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, InternalError, CategoryUpdateDTO, CategoryCreateDTO } from '@models/classes';
import { category as categoryService } from '@services';
import { matchedData } from 'express-validator';
import { plainToClass } from 'class-transformer';

const getAllCategory = async (req: Request, res: Response) => {
    try {
        const data = await categoryService.getAllCategory();
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const getCategory = async (req: Request, res: Response) => {
    const { categoryNumber } = matchedData(req, { locations: ['params'] });
    try {
        const data = await categoryService.getCategory(categoryNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const createCategory = async (req: Request, res: Response) => {
    const requestData = plainToClass(CategoryCreateDTO, matchedData(req, { locations: ['body'] }));

    try {
        const data = await categoryService.createCategory(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const updateCategory = async (req: Request, res: Response) => {
    const requestData = plainToClass(CategoryUpdateDTO, matchedData(req, { locations: ['params', 'body'] }));

    try {
        const data = await categoryService.updateCategory(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const deleteCategory = async (req: Request, res: Response) => {
    const { categoryNumber } = matchedData(req, { locations: ['params'] });

    try {
        const data = await categoryService.deleteCategory(categoryNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { getAllCategory, getCategory, createCategory, updateCategory, deleteCategory };
