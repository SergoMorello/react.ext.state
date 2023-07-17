import Core from "./Core";
import { Event } from "easy-event-emitter";
import { IConfig, TuseStateReturn, TConfigStore, TStore } from "./Types";
/** React Ext state */
export default class Ext extends Core {
    private static instance;
    /**
     * Create Ext State instance
     * @param {IConfig} config Configure object
     */
    constructor(config?: IConfig);
    /**
     * The hook for listen event state changes
     * @param {string} name State name
     * @param {Function} callback Callback
     * @param {any[]} deps Array change vars
     * @returns {void}
     */
    static useEvent: (name: string, callback: Function, deps?: any[]) => void;
    /**
     * The hook for change state variable
     * @param {string} name State name
     * @param {any} initialValue Initial value
     * @returns {TuseStateReturn<T>}
     */
    static useState: <T>(name: string, initialValue?: any) => TuseStateReturn<T>;
    /**
     * Create event state listener
     * @param {string} name State name
     * @param {Function} callback Callback
     * @returns {Event}
     */
    static createListener: (name: string, callback: Function) => Event;
    /**
     * Set state by name
     * @param {string|{[index: string]: any}} nameOrObject State name or object key - value
     * @param {any} data Any data
     * @returns {void}
     */
    static setState: (nameOrObject: string | import("./Types").TState, data: any) => void;
    /**
     * Create store experimental method
     * @param {TConfigStore} config
     * @returns {TStore<T>}
     */
    static createStore<T>(config: TConfigStore): TStore<T>;
}
export { Event };
export declare const useState: <T>(name: string, initialValue?: any) => TuseStateReturn<T>;
export declare const useEvent: (name: string, callback: Function, deps?: any[]) => void;
