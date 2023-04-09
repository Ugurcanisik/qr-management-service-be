import { IProduct } from '@interfaces/product';

export interface ICategory {
    id: number;
    categoryNumber: string;
    name: string;
    isActive: boolean;
    rank: number;
    products?: Array<IProduct>;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
