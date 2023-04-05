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
    tableName: 'Category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: false
})
export class Category extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    categoryNumber: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @Column(DataType.INTEGER)
    rank: number;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    createdAt: Date;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    updatedAt: Date;
}
