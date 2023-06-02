import Core from "./Core";
import { IConfig } from "./Types";
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
     * @returns {any}
     */
    static useState: <T>(name: string, initialValue?: any) => T | undefined;
    /**
     * Set state by name
     * @param {string|{[index: string]: any}} nameOrObject State name or object key - value
     * @param {any} data Any data
     * @returns {void}
     */
    static setState: (nameOrObject: string | import("./Types").TState, data: any) => void;
}
export declare const useState: <T>(name: string, initialValue?: any) => T | undefined;
export declare const useEvent: (name: string, callback: Function, deps?: any[]) => void;
