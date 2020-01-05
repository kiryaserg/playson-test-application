export  interface IAction<T extends string, P> {
    readonly type: string;
    readonly payload?: P;
}
