import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager.service';
import { ImageModel } from './models/image.model';
import { MatDialog } from '@angular/material/dialog';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';
import { ImageGuessModel } from './models/image-guess.model';
import { NamesDialogModel } from './models/names-dialog.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'covid-guessing-game';
    images: ImageModel[] = [];
    guesses: ImageGuessModel[];
    hasVoted = false;
    constructor(
        private dm: DataManagerService,
        public dialog: MatDialog,
        private router: Router
    ) {
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
        this.dm.images = this.images;
        const guessData = this.genGuessData();
        this.router.navigate(['/results', guessData]);
    }

    private genGuessData() {
        // use some bitwise operators to encode the guesses
        // a few caveats:
        // - JS encodes bitwise operators as 32-bit numbers
        // - 4 bits are used
        // - as is, will only work for up to 8 selections
        const shiftIncrement = 4;
        let idx = 0;
        let result = 0;
        for (const image of this.images) {
            // tslint:disable-next-line: no-bitwise
            result = result | (image.guess.index << (idx * shiftIncrement));
            idx += 1;
        }
        return result;
    }

    private updateNameGuesses() {
        const guessesHash = this.guesses.reduce((result, curItem) => {
            if (curItem.imageIndex) {
                result[curItem.imageIndex] = curItem;
            }
            return result;
        }, {});

        this.hasVoted = Object.keys(guessesHash).length === this.images.length;

        // update images with the selections from the guesses results
        this.images.forEach((image) => {
            image.guessedName =
                guessesHash[image.index]?.name || this.dm.DEFAULT_NAME;
            image.guess = guessesHash[image.index] || null;
        });
    }
}
