import { IUser } from '@interfaces/user';

interface IUserTokenPayload {
    id: number;
    userNumber: string;
}
class UserTokenPayload implements IUserTokenPayload {
    id: number;
    userNumber: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.userNumber = user.userNumber;
    }

    toJSON() {
        return { ...this };
    }
}

export { UserTokenPayload, IUserTokenPayload };
