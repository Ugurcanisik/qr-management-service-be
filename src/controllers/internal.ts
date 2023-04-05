import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse } from '@models/classes';

const healthCheck = async (req: Request, res: Response) => {
    try {
        return res.status(HttpStatusCode.OK).json(new BaseResponse());
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { healthCheck };
