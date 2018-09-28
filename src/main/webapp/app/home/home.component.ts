import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { ProductService } from 'app/entities/OnlineShop/product/product.service';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'app/shared/model/OnlineShop/product.model';
import { Subscription } from 'rxjs';
import { JhiAlertService, JhiParseLinks } from 'ng-jhipster';
import { LoginModalService, Principal, Account } from 'app/core';
import { IEntry } from 'app/shared/model/BlogMicroservice/entry.model';
import { EntryService } from '../entities/BlogMicroservice/entry/entry.service';
import { ITEMS_PER_PAGE } from 'app/shared';
@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    images: any = [];
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
    page: any = 0;
    predicate: any;
    previousPage: any;
    reverse: any;
    htmlContent: any;
    entries: IEntry[];
    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private productService: ProductService,
        private jhiAlertService: JhiAlertService,
        private parseLinks: JhiParseLinks,
        private entryService: EntryService
    ) {
        this.entries = [];
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.page = 0;
        this.links = {
            last: 0
        };
        this.predicate = 'id';
        this.reverse = true;
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntries();
        console.log(this.entries);
    }
    loadAll() {
        this.entryService
            .query({
                page: this.page,
                size: this.itemsPerPage,
                sort: this.sort()
            })
            .subscribe(
                (res: HttpResponse<IEntry[]>) => this.paginateEntries(res.body, res.headers),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }
    private paginateEntries(data: IEntry[], headers: HttpHeaders) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        for (let i = 0; i < data.length; i++) {
            const dat = data[i].content;
            let start = dat.search('<img');
            let end = dat.search('/>');
            let prevStart = dat.search('The');
            let prevEnd = dat.search(' stop');
            let img = dat.substring(start, end + 2);
            let prev = dat.substring(prevStart, prevEnd);
            data[i].prev = prev;
            data[i].img = img;
            this.entries.push(data[i]);
            console.log(this.entries[i].prev);
        }
    }
    registerChangeInEntries() {
        this.eventSubscriber = this.eventManager.subscribe('entryListModification', response => this.reset());
    }
    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
    reset() {
        this.page = 0;
        this.entries = [];
        this.loadAll();
    }
    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
}
