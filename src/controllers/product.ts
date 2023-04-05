import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, InternalError } from '@models/classes';
import { product as productService } from '@services';

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

export { getAllProducts };
