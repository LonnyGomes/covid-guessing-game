import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NamesDialogModel } from '../models/names-dialog.model';

@Component({
    selector: 'app-names-dialog',
    templateUrl: './names-dialog.component.html',
    styleUrls: ['./names-dialog.component.scss'],
})
export class NamesDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<NamesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: NamesDialogModel
    ) {}

    ngOnInit(): void {}
}
