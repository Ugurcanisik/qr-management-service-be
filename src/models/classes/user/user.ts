import { IUser } from '@interfaces/user';

export abstract class UserAbstract implements IUser {
    abstract setActive(value: boolean): void;

    abstract minimalDetail(): void;

    createdAt: Date;
    firstName: string;
    id: number;
    isActive: boolean;
    lastName: string;
    password: string;
    token: string;
    updatedAt: Date;
    userName: string;
    userNumber: string;
}

export class User extends UserAbstract {
    createdAt: Date;
    firstName: string;
    id: number;
    isActive: boolean;
    lastName: string;
    password: string;
    token: string;
    updatedAt: Date;
    userName: string;
    userNumber: string;

    setActive(value: boolean) {
        this.isActive = value;
    }

    minimalDetail() {
        return {
            id: this.id,
            userNumber: this.userNumber,
            fullName: `${this.firstName} ${this.lastName}`,
            token: this.token
        };
    }
}
