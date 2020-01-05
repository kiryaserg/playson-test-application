import { DO_WELL_BUTTON_ACTIONS } from './DoWellButtonTypes.types';
import { ActionCreator } from '../utils/ActionCreatorGenerator';
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IRootState } from "../RootStore";

const setSuccessAction = new ActionCreator<string, any>(DO_WELL_BUTTON_ACTIONS.SUCCESS).createActionCreator();
const setFailedAction = new ActionCreator<string, any>(DO_WELL_BUTTON_ACTIONS.FAILED).createActionCreator();
const setBusyAction = new ActionCreator<string, any>(DO_WELL_BUTTON_ACTIONS.BUSY).createActionCreator();
export const setNormalAction = new ActionCreator<string, any>(DO_WELL_BUTTON_ACTIONS.NORMAL).createActionCreator();

/**
 * This is mock function which creates async operation
 */

const fetch = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            const isSuccess: boolean = !!Math.floor(Math.random() * Math.floor(2));
            return isSuccess? resolve(): reject();
        }, 3000)
    });
};

export const processClick = (arg: any) => {
    return async (dispatch: ThunkDispatch<IRootState, void, Action>) => {
        dispatch(setBusyAction({}));
        try {
            await fetch();
        } catch (error) {
           return dispatch(setFailedAction(error));
        }

        return dispatch(setSuccessAction(arg));
    }
};
