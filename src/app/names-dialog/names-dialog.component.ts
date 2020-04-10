import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NamesDialogModel } from '../models/names-dialog.model';
import { ImageGuessModel } from '../models/image-guess.model';

@Component({
    selector: 'app-names-dialog',
    templateUrl: './names-dialog.component.html',
    styleUrls: ['./names-dialog.component.scss'],
})
export class NamesDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<NamesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: NamesDialogModel
    ) {}

    ngOnInit(): void {}

    onGuessClicked(guess: ImageGuessModel) {
        this.data.imageGuesses.forEach((curGuess) => {
            // unset any previously selected images
            if (curGuess.imageIndex === this.data.selectedImageIndex) {
                curGuess.imageIndex = null;
            }
        });
        guess.imageIndex = this.data.selectedImageIndex;
    }
}
