import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager.service';
import { ImageModel } from './models/image.model';
import { MatDialog } from '@angular/material/dialog';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'covid-guessing-game';
    images: ImageModel[] = [];
    constructor(private dm: DataManagerService, public dialog: MatDialog) {
        this.images = dm.images;
    }

    openDialog(index: number): void {
        const dialogRef = this.dialog.open(NamesDialogComponent, {
            //width: '250px',
            data: { selectedImageIndex: index, imageGuesses: this.dm.guesses },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed', result);
        });
    }
}
