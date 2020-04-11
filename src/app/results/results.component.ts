import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../services/data-manager.service';
import { ImageGuessModel } from '../models/image-guess.model';
import { ImageModel } from '../models/image.model';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
declare const navigator: any;
@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
    constructor(
        private dm: DataManagerService,
        private route: ActivatedRoute
    ) {}
    guesses: ImageGuessModel[];
    images: ImageModel[];
    supportsSharing = false;

    ngOnInit(): void {
        this.supportsSharing = navigator.share ? true : false;
        this.guesses = this.dm.guesses;
        this.images = this.dm.images;
        this.route.paramMap.subscribe((params) => {
            const guessData = Number(params.get('guessData'));
            if (!isNaN(guessData)) {
                this.decodeGuessData(guessData);
            }
        });
    }

    /**
     * the guesses are encoded using bitwise operators
     * decode the values by shifting the bits incrementally
     * @param guessData bit-wise encoded guess value
     */
    decodeGuessData(guessData: number) {
        let idx = 0;
        const shiftIncrement = 4;
        for (const image of this.images) {
            // tslint:disable-next-line: no-bitwise
            const curGuessIdx = (guessData >> (idx * shiftIncrement)) & 0xf;

            const curGuess = this.dm.getGuessByIndex(curGuessIdx);

            if (curGuess) {
                image.guess = curGuess;
                image.guessedName = curGuess.name;
            }

            idx += 1;
        }
    }

    async saveResults() {
        try {
            if (navigator.share) {
                // share API supported!
                await navigator.share({
                    title: 'My guess results',
                    text: 'Here are a few of my results',
                    url: window.location.href,
                });
            } else {
                const canvas = await html2canvas(document.body, {
                    backgroundColor: '#ccc',
                    logging: false,
                });
                const dataURL = canvas.toDataURL('image/png');
                const el = document.createElement('a');
                el.href = dataURL;
                el.download = 'guess-results.png';
                el.click();
            }
        } catch (error) {
            console.error(`Failed to save results: ${error.message}`);
        }
    }
}
