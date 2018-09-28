import { Moment } from 'moment';
import { IBlog } from 'app/shared/model/BlogMicroservice/blog.model';
import { ITag } from 'app/shared/model/BlogMicroservice/tag.model';

export interface IEntry {
    id?: number;
    title?: string;
    content?: any;
    date?: Moment;
    blog?: IBlog;
    tags?: ITag[];
    img?: string;
    prev?: string;
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: Moment,
        public blog?: IBlog,
        public tags?: ITag[],
        public img?: string,
        public prev?: string
    ) {}
}
