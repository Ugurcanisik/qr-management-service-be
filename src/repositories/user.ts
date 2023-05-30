import { user } from './entityAccess';
import { UserCreateDTO, UserUpdateDTO } from '@models/classes';
import { date as dateHelper } from '@helpers';

const getAllUsers = async () => user.findAll({ where: { deletedAt: null } });

const getUserByUserNumber = async (userNumber: string) =>
    user.findOne({
        where: {
            userNumber
        },
        raw: true,
        nest: true
    });

const getUserByUserName = async (userName: string) =>
    user.findOne({
        where: {
            userName
        }
    });

const createUser = async (payload: UserCreateDTO) => user.create({ ...payload });

const updateUser = async (payload: UserUpdateDTO) =>
    user.update(payload, { where: { userNumber: payload.userNumber } });

const updateToken = async (userNumber: string, token: string) => user.update({ token }, { where: { userNumber } });

const deleteUser = async (userNumber: string) =>
    user.update({ deletedAt: dateHelper.nowDateWithToDate() }, { where: { userNumber } });

export { getAllUsers, getUserByUserNumber, getUserByUserName, createUser, updateUser, deleteUser, updateToken };
