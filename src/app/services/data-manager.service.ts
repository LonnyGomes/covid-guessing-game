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

    DEFAULT_NAME = '❓';
    constructor() {
        this._images = data.images.map((img, index) => ({
            index: index + 1,
            src: `${BASE_IMG_PATH}/${img}`,
            guessedName: this.DEFAULT_NAME,
            guess: null,
        }));

        this._guesses = data.names.map((name, index) => ({
            index: index + 1,
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

    set images(value: ImageModel[]) {
        this._images = value;
    }

    get guesses(): ImageGuessModel[] {
        return this._guesses;
    }
    set guesses(value: ImageGuessModel[]) {
        this._guesses = value;
    }

    getImageForIndex(index: number): string {
        const [result] = this._images.filter((item) => item.index === index);

        if (result) {
            return result.src;
        }

        return '';
    }

    getGuessByIndex(index: number): ImageGuessModel {
        const [result] = this._guesses.filter((item) => item.index === index);

        return result;
    }
}
