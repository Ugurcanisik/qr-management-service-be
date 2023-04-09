import {
    Table,
    Model,
    Column,
    DataType,
    Unique,
    Default,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { date as dateHelper } from '@helpers';
import { Product } from './product.entity';

@Table({
    tableName: 'Category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
})
export class Category extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(10))
    categoryNumber: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @Default(false)
    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    rank: number;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    createdAt: Date;

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    updatedAt: Date;

    @Column(DataType.DATE)
    deletedAt: Date;

    @HasMany(() => Product, {
        sourceKey: 'categoryNumber'
    })
    products?: Array<Product>;
}
