import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../services/data-manager.service';
import { ImageGuessModel } from '../models/image-guess.model';
import { ImageModel } from '../models/image.model';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
    constructor(private dm: DataManagerService) {}
    guesses: ImageGuessModel[];
    images: ImageModel[];
    ngOnInit(): void {
        this.guesses = this.dm.guesses;
        this.images = this.dm.images;
    }

    async saveResults() {
        try {
            const canvas = await html2canvas(document.body, {
                backgroundColor: '#ccc',
            });
            const dataURL = canvas.toDataURL('image/png');

            if (navigator['share']) {
                // share API supported!
                await navigator['share']({
                    title: 'Guess Results',
                    text: 'Check out my results',
                    url: `https://google.com`,
                });
                alert('Shared!');
            } else {
                const el = document.createElement('a');
                el.href = dataURL;
                el.download = 'guess-results.png';
                el.click();
            }
        } catch (error) {
            alert(`Failed to save results: ${error.message}`);
        }
    }
}
