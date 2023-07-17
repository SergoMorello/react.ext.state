export type TState = {
    [index: string]: any;
};
export interface IConfig {
    /**
     * Instance name
     */
    name: string;
    /**
     * Default state object
     */
    state: TState;
    /**
     * Disable save state
     */
    disableState: boolean;
}
export type TStateFunction<T> = (state: (prevState: T) => T | T) => T | void | undefined;
export type TuseStateReturn<T> = [
    /**
     * State value
     */
    T | undefined,
    /**
     * Function for change state value
     */
    TStateFunction<T>
];
export type TConfigStore = {
    name: string;
};
export type TStore<T> = {
    name: string;
    useState(): void;
    setState: TStateFunction<T>;
};
