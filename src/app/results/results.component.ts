import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataManagerService } from '../services/data-manager.service';
import { ImageGuessModel } from '../models/image-guess.model';
import { ImageModel } from '../models/image.model';
import html2canvas from 'html2canvas';
declare const navigator: any;
@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, AfterViewInit {
    constructor(private dm: DataManagerService) {}
    guesses: ImageGuessModel[];
    images: ImageModel[];
    dataURL: any;
    ngOnInit(): void {
        this.guesses = this.dm.guesses;
        this.images = this.dm.images;
    }

    async ngAfterViewInit() {
        try {
            const canvas = await html2canvas(document.body, {
                backgroundColor: '#ccc',
            });
            this.dataURL = canvas.toDataURL('image/png');
        } catch (error) {
            console.error(`Error while taking snapshot: ${error.message}`);
        }
    }

    async saveResults() {
        try {
            if (navigator.share) {
                // share API supported!
                const shareUrl = `${window.location.protocol}//${window.location.host}`;

                await navigator.share({
                    text: 'Guess results',
                    url: shareUrl,
                });
                alert(`Sharing: ${shareUrl}`);
            } else {
                const el = document.createElement('a');
                el.href = this.dataURL;
                el.download = 'guess-results.png';
                el.click();
            }
        } catch (error) {
            alert(`Failed to save results: ${error.message}`);
        }
    }
}
