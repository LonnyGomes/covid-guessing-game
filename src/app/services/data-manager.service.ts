import { Injectable } from '@angular/core';
import data from './data.json';
import { ImageModel } from '../models/image.model';
import { ImageGuessModel } from '../models/image-guess.model';

const BASE_IMG_PATH = 'assets/images';
@Injectable({
    providedIn: 'root',
})
export class DataManagerService {
    // tslint:disable-next-line: variable-name
    private _images: ImageModel[];
    // tslint:disable-next-line: variable-name
    private _guesses: ImageGuessModel[];

    constructor() {
        this._images = data.images.map((img, index) => ({
            index,
            src: `${BASE_IMG_PATH}/${img}`,
            guessedName: '❓',
        }));

        this._guesses = data.names.map((name) => ({
            imageIndex: null,
            name,
        }));
    }

    get names(): string[] {
        return data.names;
    }

    get images(): ImageModel[] {
        return this._images;
    }

    get guesses(): ImageGuessModel[] {
        return this._guesses;
    }
}
