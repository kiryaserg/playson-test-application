import { Action } from 'redux';

export interface IPayloadAction<T extends string, P> extends Action {
    readonly type: T;
    readonly payload: P;
}
