import { LoginDTO, NotFoundError, User, InternalError } from '@models/classes';
import { user as userRepository } from '@repositories';
import { plainToClass } from 'class-transformer';

const login = async (loginRequest: LoginDTO) => {
    const userData = await userRepository.getUserByUserName(loginRequest.userName);

    if (!userData) {
        throw new NotFoundError({
            message: 'Username or password is wrong.'
        });
    }

    const passwordCheck = await userData.comparePasswords(loginRequest.password, userData.password);

    if (!passwordCheck) {
        throw new InternalError({
            message: 'Username or password is wrong.'
        });
    }

    return plainToClass(User, userData.toJSON()).minimalDetail();

    // const token = jwtHelper.signTokens({
    //     fullName: userData.firstName + ' ' + userData.lastName,
    //     userNumber: userData.userNumber
    // });
    //
    // await userRepository.updateToken(userData.userNumber, token);
    // user.setToken(token);
};

export { login };
