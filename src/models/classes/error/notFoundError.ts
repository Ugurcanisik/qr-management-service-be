import { HttpStatusCode, error as errorConstants } from '@constants';
import { InternalError as IInternalError } from '@interfaces/error';
import InternalError from './internalError';

export default class NotFoundError extends InternalError {
    code: string;
    httpCode: number;

    constructor({ message, code, httpCode }: IInternalError) {
        super({ message });

        this.code = code || errorConstants.CODE.notFoundError;
        this.httpCode = httpCode || HttpStatusCode.NOT_FOUND;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
