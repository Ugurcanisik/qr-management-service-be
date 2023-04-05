import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, InternalError } from '@models/classes';
import { user as userService } from '@services';

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const data = await userService.getAllUsers();
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { getAllUsers };
