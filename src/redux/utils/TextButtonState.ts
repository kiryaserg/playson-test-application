import {ITextButtonState} from "../do-well-button/DoWellButton.reducer";

export class TextButtonState implements ITextButtonState{
    public buttonText: string;
    public isBusy: boolean;

    constructor(buttonText: string, disabled: boolean) {
        this.buttonText = buttonText;
        this.isBusy = disabled;
    }
}