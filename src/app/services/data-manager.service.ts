import { Injectable } from '@angular/core';
import data from './data.json';

const BASE_IMG_PATH = 'assets/images';
@Injectable({
    providedIn: 'root',
})
export class DataManagerService {
    constructor() {}

    get names(): string[] {
        return data.names;
    }

    get images(): string[] {
        return data.images.map((img) => `${BASE_IMG_PATH}/${img}`);
    }
}
