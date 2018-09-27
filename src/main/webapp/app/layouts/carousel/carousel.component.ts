import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'app/entities/OnlineShop/product/product.service';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'app/shared/model/OnlineShop/product.model';
import { Subscription } from 'rxjs';
import { JhiAlertService, JhiParseLinks } from 'ng-jhipster';
@Component({
    selector: 'jhi-carousel',
    templateUrl: './carousel.component.html',
    styles: []
})
export class CarouselComponent implements OnInit, OnDestroy {
    currentAccount: any;
    products: IProduct[];
    error: any;
    success: any;
    eventSubscriber: Subscription;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any = 5;
    page: any = 1;
    predicate: any;
    previousPage: any;
    reverse: any;
    constructor(private productService: ProductService, private jhiAlertService: JhiAlertService, private parseLinks: JhiParseLinks) {}

    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.productService
            .query({
                page: this.page - 1,
                size: this.itemsPerPage
            })
            .subscribe(
                (res: HttpResponse<IProduct[]>) => {
                    this.paginateProducts(res.body, res.headers);
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }
    private paginateProducts(data: IProduct[], headers: HttpHeaders) {
        console.log(data);
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        this.queryCount = this.totalItems;
        this.products = data;
        console.log(this.products);
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    ngOnDestroy() {}
}
