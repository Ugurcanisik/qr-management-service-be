import { user } from './entityAccess';

const getAllUsers = async () => user.findAll({});

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
        },
        raw: true,
        nest: true
    });

export { getAllUsers, getUserByUserNumber, getUserByUserName };
