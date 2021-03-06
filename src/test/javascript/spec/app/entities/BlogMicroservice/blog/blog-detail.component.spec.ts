/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewayOnlineShopTestModule } from '../../../../test.module';
import { BlogDetailComponent } from 'app/entities/BlogMicroservice/blog/blog-detail.component';
import { Blog } from 'app/shared/model/BlogMicroservice/blog.model';

describe('Component Tests', () => {
    describe('Blog Management Detail Component', () => {
        let comp: BlogDetailComponent;
        let fixture: ComponentFixture<BlogDetailComponent>;
        const route = ({ data: of({ blog: new Blog(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GatewayOnlineShopTestModule],
                declarations: [BlogDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(BlogDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BlogDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.blog).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
