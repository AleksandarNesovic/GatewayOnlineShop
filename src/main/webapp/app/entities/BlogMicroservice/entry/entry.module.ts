import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ngx-ckeditor';

import { GatewayOnlineShopSharedModule } from 'app/shared';
import {
    EntryComponent,
    EntryDetailComponent,
    EntryUpdateComponent,
    EntryDeletePopupComponent,
    EntryDeleteDialogComponent,
    entryRoute,
    entryPopupRoute
} from './';

const ENTITY_STATES = [...entryRoute, ...entryPopupRoute];

@NgModule({
    imports: [GatewayOnlineShopSharedModule, RouterModule.forChild(ENTITY_STATES), CKEditorModule],
    declarations: [EntryComponent, EntryDetailComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    entryComponents: [EntryComponent, EntryUpdateComponent, EntryDeleteDialogComponent, EntryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayOnlineShopEntryModule {}
