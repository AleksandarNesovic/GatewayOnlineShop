import { NgModule } from '@angular/core';

import { GatewayOnlineShopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GatewayOnlineShopSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GatewayOnlineShopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayOnlineShopSharedCommonModule {}
