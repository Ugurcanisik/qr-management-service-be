import { user as userRepository } from '@repositories';
import { UserCreateDTO, UserUpdateDTO, NotFoundError } from '@models/classes';
import { common as commonUtil } from '@utils';
import { jwt as jwtHelper } from '@helpers';

const getAllUsers = async () => userRepository.getAllUsers();

const getUser = async (categoryNumber: string) => {
    const user = await userRepository.getUserByUserNumber(categoryNumber);

    if (!user) {
        throw new NotFoundError({
            message: 'User is not found'
        });
    }
    return user;
};

const createUser = async (payload: UserCreateDTO) => {
    const userNumber = commonUtil.generateRandomString();

    const user = await userRepository.createUser({ userNumber, ...payload });

    const token = jwtHelper.signTokens({
        id: user.id,
        userNumber
    });

    await userRepository.updateToken(userNumber, token);

    return userRepository.getUserByUserNumber(user.userNumber);
};

const updateUser = async (payload: UserUpdateDTO) => userRepository.updateUser(payload);

const deleteUser = async (categoryNumber: string) => userRepository.deleteUser(categoryNumber);

export { getAllUsers, createUser, updateUser, deleteUser, getUser };
