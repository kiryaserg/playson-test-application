import {IPayloadAction} from "../utils/IPayloadAction";
import {DO_WELL_BUTTON_ACTIONS} from "./DoWellButtonTypes.types";
import {TextButtonState} from "../utils/TextButtonState";

const NORMAL_BUTTON_TEXT: string = "Сделать все хорошо";
const BUSY_BUTTON_TEXT: string = "Делается все хорошо! ";
const SUCCESS_BUTTON_TEXT: string = "Все сделано хорошо";
const FAILED_BUTTON_TEXT: string = "Хоророшо сделать не получилось";

export interface ITextButtonState {
    isBusy: boolean;
    buttonText: string;
}

export const defaultDoWellButtonState: ITextButtonState = {
    isBusy: false,
    buttonText: NORMAL_BUTTON_TEXT
};

export const doWellButton = (state: ITextButtonState = defaultDoWellButtonState, action: IPayloadAction<string, any>):ITextButtonState => {
    switch (action.type) {
        case DO_WELL_BUTTON_ACTIONS.NORMAL:
            return new TextButtonState(NORMAL_BUTTON_TEXT, false);
        case DO_WELL_BUTTON_ACTIONS.BUSY:
            return new TextButtonState(BUSY_BUTTON_TEXT, true);
        case DO_WELL_BUTTON_ACTIONS.SUCCESS:
            return  new TextButtonState(SUCCESS_BUTTON_TEXT, false);
        case DO_WELL_BUTTON_ACTIONS.FAILED:
            return new TextButtonState(FAILED_BUTTON_TEXT, false);
        default:
            return state;
    }
};
