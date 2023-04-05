import { InternalError as IInternalError } from '@interfaces/error';
import { HttpStatusCode, error as errorConstants } from '@constants';

export default class InternalError extends Error implements IInternalError {
    code: string;
    httpCode: number;

    constructor({ message, code, httpCode }: IInternalError) {
        super(message);

        this.code = code || errorConstants.CODE.internalError;
        this.httpCode = httpCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
        Object.setPrototypeOf(this, InternalError.prototype);
    }
}
