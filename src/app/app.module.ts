import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';
import { EntryComponent } from './entry/entry.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
    declarations: [
        AppComponent,
        NamesDialogComponent,
        EntryComponent,
        ResultsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [EntryComponent],
})
export class AppModule {}
