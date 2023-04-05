import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, InternalError } from '@models/classes';
import { category as categoryService } from '@services';

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

export { getAllCategory };
