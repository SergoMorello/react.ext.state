import { Events } from "easy-event-emitter";
import { TState } from "./Types";
export default abstract class Core {
    protected events: Events;
    protected state: TState;
    protected disableState: boolean;
    readonly name: string;
    constructor(groupName?: string);
    /**
     * The hook for listen event state changes
     * @param {string} name State name
     * @param {Function} callback Callback
     * @param {any[]} deps Array change vars
     * @returns {void}
     */
    useEvent(name: string, callback: Function, deps?: any[]): void;
    /**
     * The hook for change state variable
     * @param {string} name State name
     * @param {any} initialValue Initial value
     * @returns {any}
     */
    useState<T>(name: string, initialValue?: any): T | undefined;
    /**
     * Emit and save state
     * @param {string} name State name
     * @param {any} data
     * @returns {void}
     */
    private emitState;
    /**
     * Set state by name
     * @param {string|TState} nameOrObject State name or object key - value
     * @param {any} data Any data
     * @returns {void}
     */
    setState(nameOrObject: string | TState, data: any): void;
}
