import {
    Table,
    Model,
    Column,
    DataType,
    Unique,
    AllowNull,
    BeforeCreate,
    BeforeUpdate,
    Default,
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
import { date as dateHelper } from '@helpers';
import { crypto as cryptoUtil } from '@utils';

@Table({
    tableName: 'User',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    userNumber: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    firstName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    lastName: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    userName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    token: string;

    @Default(true)
    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    createdAt: Date;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    updatedAt: Date;

    @Column(DataType.DATE)
    deletedAt: Date;

    @BeforeCreate
    @BeforeUpdate
    static async hashPassword(instance: User) {
        instance.password = cryptoUtil.generateHashForPassword(instance.password);
    }

    public async comparePasswords(candidatePassword: string, hashedPassword: string) {
        return cryptoUtil.checkHash(candidatePassword, hashedPassword);
    }
}
