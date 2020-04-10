import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NamesDialogComponent } from './names-dialog/names-dialog.component';

@NgModule({
    declarations: [AppComponent, NamesDialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
