import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayOnlineShopProductModule as OnlineShopProductModule } from './OnlineShop/product/product.module';
import { GatewayOnlineShopCategoryModule as OnlineShopCategoryModule } from './OnlineShop/category/category.module';
import { GatewayOnlineShopCustomerModule as OnlineShopCustomerModule } from './OnlineShop/customer/customer.module';
import { GatewayOnlineShopAddressModule as OnlineShopAddressModule } from './OnlineShop/address/address.module';
import { GatewayOnlineShopBlogModule as BlogMicroserviceBlogModule } from './BlogMicroservice/blog/blog.module';
import { GatewayOnlineShopTagModule as BlogMicroserviceTagModule } from './BlogMicroservice/tag/tag.module';
import { GatewayOnlineShopEntryModule as BlogMicroserviceEntryModule } from './BlogMicroservice/entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        OnlineShopProductModule,
        OnlineShopCategoryModule,
        OnlineShopCustomerModule,
        OnlineShopAddressModule,
        BlogMicroserviceBlogModule,
        BlogMicroserviceTagModule,
        BlogMicroserviceEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayOnlineShopEntityModule {}
