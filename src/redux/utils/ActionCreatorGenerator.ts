import { IAction } from './IAction';
import { IPayloadAction } from './IPayloadAction';

/**
 * Class for generating action creators
 *
 * @export ActionCreator class
 * @class ActionCreator
 * @template T the type of actionType. Must extend string.
 * @template P The type of the payload.
 */
export class ActionCreator<T extends string, P> {

    public readonly type: T;

    constructor(type: T) {
        this.type = type;
    }

    /**
     *
     *
     * @returns (payload: P) => IPayloadAction<T, P>
     * @memberof ActionCreator
     */
    public createActionCreator(): (payload: P) => IPayloadAction<T, P> {
        return (payload: P) => {
            return {
                payload,
                type: this.type,
            };
        };
    }

    /**
     *
     *
     * @returns () => IAction<T, P>
     * @memberof ActionCreator
     */
    public createEmptyActionCreator(): () => IAction<T, P> {
        return () => {
            return {
                type: this.type,
            };
        };
    }
}
