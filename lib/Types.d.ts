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
