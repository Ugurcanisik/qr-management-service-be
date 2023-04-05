import {
    Table,
    Model,
    Column,
    DataType,
    Unique,
    Default,
    AllowNull,
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
import { date as dateHelper } from '@helpers';

@Table({
    tableName: 'ProductHistory',
    createdAt: 'createdAt',
    updatedAt: false,
    deletedAt: false
})
export class ProductHistory extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    productNumber: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    imageUrl: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    price: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    description: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    categoryNumber: string;

    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    createdAt: Date;
}
