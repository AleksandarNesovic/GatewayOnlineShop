import { ICustomer } from 'app/shared/model/OnlineShop/customer.model';

export interface IAddress {
    id?: number;
    address?: string;
    city?: string;
    country?: string;
    customer?: ICustomer;
}

export class Address implements IAddress {
    constructor(public id?: number, public address?: string, public city?: string, public country?: string, public customer?: ICustomer) {}
}
