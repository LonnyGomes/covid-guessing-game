import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
    declarations: [AppComponent, NamesDialogComponent, EntryComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [EntryComponent],
})
export class AppModule {}
