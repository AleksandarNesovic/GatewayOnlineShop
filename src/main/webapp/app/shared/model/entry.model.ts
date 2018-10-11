import { Moment } from 'moment';
import { IBlog } from 'app/shared/model//blog.model';
import { ITag } from 'app/shared/model//tag.model';

export interface IEntry {
    id?: number;
    title?: string;
    content?: any;
    date?: Moment;
    imgPreview?: string;
    blog?: IBlog;
    tags?: ITag[];
}

export class Entry implements IEntry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: Moment,
        public imgPreview?: string,
        public blog?: IBlog,
        public tags?: ITag[]
    ) {}
}
