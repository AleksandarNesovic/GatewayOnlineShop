import { Moment } from 'moment';
import { ICategory } from 'app/shared/model/OnlineShop/category.model';

export interface IProduct {
    id?: number;
    title?: string;
    keywords?: string;
    description?: string;
    image?: string;
    rating?: number;
    dateAdded?: Moment;
    dateModified?: Moment;
    categories?: ICategory[];
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public title?: string,
        public keywords?: string,
        public description?: string,
        public image?: string,
        public rating?: number,
        public dateAdded?: Moment,
        public dateModified?: Moment,
        public categories?: ICategory[]
    ) {}
}
