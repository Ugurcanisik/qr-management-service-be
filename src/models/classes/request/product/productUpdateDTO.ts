export class ProductUpdateDTO {
    productNumber: string;
    categoryNumber?: string;
    name?: string;
    imageUrl?: string;
    price?: number;
    description?: string;
    rank?: boolean;
    isActive?: boolean;
}
