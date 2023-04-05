import { IProduct } from '@interfaces/product';

export abstract class ProductAbstract implements IProduct {
    abstract setActive(value: boolean): void;

    abstract setRank(value: number): void;

    categoryNumber: string;
    createdAt: Date;
    description: string;
    id: number;
    imageUrl: string;
    isActive: boolean;
    name: string;
    price: string;
    productNumber: string;
    rank: number;
    updatedAt: Date;
}

export class Product extends ProductAbstract {
    categoryNumber: string;
    createdAt: Date;
    description: string;
    id: number;
    imageUrl: string;
    isActive: boolean;
    name: string;
    price: string;
    productNumber: string;
    rank: number;
    updatedAt: Date;

    setActive(value: boolean) {
        this.isActive = value;
    }

    setRank(value: number) {
        this.rank = value;
    }
}
