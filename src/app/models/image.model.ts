import { ImageGuessModel } from './image-guess.model';

export interface ImageModel {
    index: number;
    src: string;
    guessedName: string | null;
    guess: ImageGuessModel | null;
}
