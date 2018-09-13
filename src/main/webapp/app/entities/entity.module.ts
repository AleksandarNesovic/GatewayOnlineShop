import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayOnlineShopProductModule as OnlineShopProductModule } from './OnlineShop/product/product.module';
import { GatewayOnlineShopCategoryModule as OnlineShopCategoryModule } from './OnlineShop/category/category.module';
import { GatewayOnlineShopCustomerModule as OnlineShopCustomerModule } from './OnlineShop/customer/customer.module';
import { GatewayOnlineShopAddressModule as OnlineShopAddressModule } from './OnlineShop/address/address.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        OnlineShopProductModule,
        OnlineShopCategoryModule,
        OnlineShopCustomerModule,
        OnlineShopAddressModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayOnlineShopEntityModule {}
