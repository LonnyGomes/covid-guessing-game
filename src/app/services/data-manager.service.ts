import { Injectable } from '@angular/core';
import data from './data.json';
import { ImageModel } from '../models/image.model';

const BASE_IMG_PATH = 'assets/images';
@Injectable({
    providedIn: 'root',
})
export class DataManagerService {
    constructor() {}

    get names(): string[] {
        return data.names;
    }

    get images(): ImageModel[] {
        return data.images.map((img, index) => ({
            index,
            src: `${BASE_IMG_PATH}/${img}`,
        }));
    }
}
