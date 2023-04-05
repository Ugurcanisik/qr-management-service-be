import { Request, Response, NextFunction } from 'express';
import { jwt as jwtUtil } from '@utils';
import { IUserTokenPayload, InternalError, BaseResponse } from '@models/classes';
import { HttpStatusCode, error as errorConstant } from '@constants';

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearer = (req.headers?.authorization || req.headers?.Authorization) as string;
        if (!bearer) {
            throw new InternalError({
                message: 'Token is not found!',
                httpCode: HttpStatusCode.UNAUTHORIZED,
                code: errorConstant.CODE.unauthorized
            });
        }
        const token = bearer.replace('Bearer ', '');
        const verifyResult = jwtUtil.verifyJwt<IUserTokenPayload>(token);
        if (!verifyResult) {
            throw new InternalError({
                message: 'Token is not verify!',
                httpCode: HttpStatusCode.UNAUTHORIZED,
                code: errorConstant.CODE.unauthorized
            });
        }
        req.user = verifyResult;
        next();
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { auth };
