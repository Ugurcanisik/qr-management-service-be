import {
    Table,
    Model,
    Column,
    DataType,
    Unique,
    Default,
    AllowNull,
    AfterUpdate,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { date as dateHelper } from '@helpers';
import { Category } from '@entities';
import { productHistory as productHistoryRepository } from '@repositories';

@Table({
    tableName: 'Product',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
})
export class Product extends Model {
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

    @ForeignKey(() => Category)
    @AllowNull(false)
    @Column
    categoryNumber: string;

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

    @Default(() => dateHelper.nowDateWithToDate())
    @Column(DataType.DATE)
    deletedAt: Date;

    @BelongsTo(() => Category, {
        targetKey: 'categoryNumber'
    })
    category?: Category;

    @AfterUpdate
    static async historyRecords(instance: Product) {
        const { productNumber, name, imageUrl, price, description, categoryNumber, isActive } = instance.dataValues;

        await productHistoryRepository.createProductHistory({
            productNumber,
            name,
            imageUrl,
            price,
            description,
            categoryNumber,
            isActive
        });
    }
}
