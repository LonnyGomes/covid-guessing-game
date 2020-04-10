import { Injectable } from '@angular/core';
import data from './data.json';
import { ImageModel } from '../models/image.model';

const BASE_IMG_PATH = 'assets/images';
@Injectable({
    providedIn: 'root',
})
export class DataManagerService {
    // tslint:disable-next-line: variable-name
    private _images: ImageModel[];

    constructor() {
        this._images = data.images.map((img, index) => ({
            index,
            src: `${BASE_IMG_PATH}/${img}`,
            guessedName: '❓',
        }));
    }

    get names(): string[] {
        return data.names;
    }

    get images(): ImageModel[] {
        return this._images;
    }
}
