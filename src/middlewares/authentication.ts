import { Request, Response, NextFunction } from 'express';
import { jwt as jwtUtil } from '@utils';
import { IUserTokenPayload, InternalError } from '@models/classes';
import { HttpStatusCode } from '@constants';

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
    const bearer = (req.headers?.authorization || req.headers?.Authorization) as string;

    if (!bearer) {
        throw new InternalError({
            message: 'Token is not found!',
            httpCode: HttpStatusCode.UNAUTHORIZED
        });
    }

    const token = bearer.replace('Bearer ', '');
    const verifyResult = jwtUtil.verifyJwt<IUserTokenPayload>(token);

    if (!verifyResult) {
        throw new InternalError({
            message: 'Token is not verify!',
            httpCode: HttpStatusCode.UNAUTHORIZED
        });
    }

    req.user = verifyResult;
    next();
};

export { auth };
