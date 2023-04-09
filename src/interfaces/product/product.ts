import { ICategory } from '@interfaces/category';

export interface IProduct {
    id: number;
    productNumber: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    categoryNumber: string;
    isActive: boolean;
    rank: number;

    category?: ICategory;

    createdAt: Date;
    updatedAt: Date;

    deletedAt: Date;
}
