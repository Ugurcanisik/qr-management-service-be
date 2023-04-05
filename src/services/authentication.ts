import { LoginDTO, NotFoundError, User } from '@models/classes';
import { user as userRepository } from '@repositories';
import { plainToClass } from 'class-transformer';

const login = async (loginRequest: LoginDTO) => {
    const userData = await userRepository.getUserByUserName(loginRequest.userName);

    if (!userData) {
        throw new NotFoundError({
            message: 'Kullanıcı bulunamadı'
        });
    }

    return plainToClass(User, userData).minimalDetail();
};

export { login };
