export interface IUser {
    id: number;
    userNumber: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    token: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
