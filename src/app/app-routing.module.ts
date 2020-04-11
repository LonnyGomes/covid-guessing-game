import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'results/:guessData', component: ResultsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
