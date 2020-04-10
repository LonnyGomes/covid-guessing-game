import { ImageGuessModel } from './image-guess.model';

export interface NamesDialogModel {
    selectedImageIndex: number;
    imageGuesses: ImageGuessModel[];
}
