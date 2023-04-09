import { ICategory } from '@interfaces/category';
import { ProductAbstract } from '@models/classes/product/product';

export abstract class CategoryAbstract implements ICategory {
    abstract setActive(value: boolean): void;

    abstract setRank(value: number): void;

    categoryNumber: string;
    createdAt: Date;
    id: number;
    isActive: boolean;
    name: string;
    rank: number;
    updatedAt: Date;
    deletedAt: Date;
    products: Array<ProductAbstract>;
}

export class Category extends CategoryAbstract {
    categoryNumber: string;
    createdAt: Date;
    id: number;
    isActive: boolean;
    name: string;
    rank: number;
    updatedAt: Date;
    deletedAt: Date;
    products: Array<ProductAbstract>;

    setActive(value: boolean) {
        this.isActive = value;
    }

    setRank(value: number) {
        this.rank = value;
    }
}
