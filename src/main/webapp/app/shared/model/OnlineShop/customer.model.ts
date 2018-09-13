import { IAddress } from 'app/shared/model/OnlineShop/address.model';

export interface ICustomer {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    addresses?: IAddress[];
}

export class Customer implements ICustomer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public addresses?: IAddress[]
    ) {}
}
