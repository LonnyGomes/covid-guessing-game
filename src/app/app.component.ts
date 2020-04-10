import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager.service';
import { ImageModel } from './models/image.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'covid-guessing-game';
    images: ImageModel[] = [];
    constructor(private dm: DataManagerService) {
        this.images = dm.images;
    }
}
