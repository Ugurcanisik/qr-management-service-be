import { Response, Request } from 'express';
import { HttpStatusCode } from '@constants';
import { BaseResponse, UserCreateDTO, UserUpdateDTO, InternalError } from '@models/classes';
import { user as userService } from '@services';
import { matchedData } from 'express-validator';
import { plainToClass } from 'class-transformer';

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

const getUser = async (req: Request, res: Response) => {
    const { userNumber } = matchedData(req, { locations: ['params'] });
    try {
        const data = await userService.getUser(userNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const createUser = async (req: Request, res: Response) => {
    const requestData = plainToClass(UserCreateDTO, matchedData(req, { locations: ['body'] }));

    try {
        const data = await userService.createUser(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const updateUser = async (req: Request, res: Response) => {
    const requestData = plainToClass(UserUpdateDTO, matchedData(req, { locations: ['params', 'body'] }));

    try {
        await userService.updateUser(requestData);
        return res.status(HttpStatusCode.OK).json(new BaseResponse());
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { userNumber } = matchedData(req, { locations: ['params'] });

    try {
        const data = await userService.deleteUser(userNumber);
        return res.status(HttpStatusCode.OK).json(new BaseResponse({ data }));
    } catch (error) {
        if (error instanceof InternalError) {
            return res.status(error.httpCode).json(new BaseResponse({ error }));
        }
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.createDefaultError());
    }
};

export { getAllUsers, getUser, updateUser, deleteUser, createUser };
