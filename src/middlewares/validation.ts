import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { HttpStatusCode } from '@constants';
import { BaseResponse } from '../models/classes';

const requestValidator = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const validationResults = validationResult(req);
        if (!validationResults.isEmpty()) {
            return res.status(HttpStatusCode.BAD_REQUEST).json(
                new BaseResponse({
                    error: { validations: validationResults.array({ onlyFirstError: true }) }
                })
            );
        }
        return next();
    };
};

export { requestValidator };
