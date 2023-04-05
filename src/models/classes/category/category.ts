import { ICategory } from '@interfaces/category';

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
}

export class Category extends CategoryAbstract {
    categoryNumber: string;
    createdAt: Date;
    id: number;
    isActive: boolean;
    name: string;
    rank: number;
    updatedAt: Date;

    setActive(value: boolean) {
        this.isActive = value;
    }

    setRank(value: number) {
        this.rank = value;
    }
}
