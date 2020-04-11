import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'results', component: ResultsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
