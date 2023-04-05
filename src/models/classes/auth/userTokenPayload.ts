import { IUser } from '@interfaces/user';

interface IUserTokenPayload {
    id: number;
    userNumber: string;
    username: string;
    fullName: string;
    exp: number;
}
class UserTokenPayload implements IUserTokenPayload {
    id: number;
    userNumber: string;
    username: string;
    fullName: string;
    exp: number;

    constructor(user: IUser) {
        this.id = user.id;
        this.username = user.userName;
        this.fullName = user.firstName;
        this.userNumber = user.userNumber;
    }

    toJSON() {
        return { ...this };
    }
}

export { UserTokenPayload, IUserTokenPayload };
