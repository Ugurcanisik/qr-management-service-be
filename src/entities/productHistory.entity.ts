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
    @Column(DataType.STRING(10))
    productNumber: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    imageUrl: string;

    @Column(DataType.STRING)
    price: string;

    @Column(DataType.STRING)
    description: string;

    @Column(DataType.STRING(10))
    categoryNumber: string;

    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    createdAt: Date;
}
