import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager.service';
import { ImageModel } from './models/image.model';
import { MatDialog } from '@angular/material/dialog';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';
import { ImageGuessModel } from './models/image-guess.model';
import { NamesDialogModel } from './models/names-dialog.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'covid-guessing-game';
    images: ImageModel[] = [];
    guesses: ImageGuessModel[];
    constructor(private dm: DataManagerService, public dialog: MatDialog) {
        this.images = dm.images;
        this.guesses = dm.guesses;
    }

    openDialog(index: number): void {
        const dialogRef = this.dialog.open(NamesDialogComponent, {
            maxWidth: '400px',
            hasBackdrop: true,
            data: { selectedImageIndex: index, imageGuesses: this.guesses },
        });

        dialogRef.afterClosed().subscribe((result: NamesDialogModel) => {
            if (!result) {
                // nothing was selected
                return;
            }

            this.guesses = result.imageGuesses;
            this.updateNameGuesses();
        });
    }

    saveResults() {
        this.dm.guesses = this.guesses;
    }

    private updateNameGuesses() {
        const guessesHash = this.guesses.reduce((result, curItem) => {
            if (curItem.imageIndex) {
                result[curItem.imageIndex] = curItem.name;
            }
            return result;
        }, {});

        // update images with the selections from the guesses results
        this.images.forEach(
            (image) =>
                (image.guessedName =
                    guessesHash[image.index] || this.dm.DEFAULT_NAME)
        );
    }
}
