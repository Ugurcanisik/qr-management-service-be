import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { plainToClass } from 'class-transformer';
import { LoginDTO, BaseResponse, InternalError } from '@models/classes';
import { authentication as authenticationService } from '@services';

const login = async (req: Request, res: Response) => {
    const loginRequest = plainToClass(LoginDTO, req.body);
    try {
        const data = await authenticationService.login(loginRequest);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { login };
