import Core from "./Core";
import {Event} from "easy-event-emitter";
import {
	IConfig,
	TuseStateReturn,
	TConfigStore,
	TStore
} from "./Types";

/** React Ext state */
export default class Ext extends Core {
	private static instance = new Ext();

	/**
	 * Create Ext State instance
	 * @param {IConfig} config Configure object
	 */
	constructor(config?: IConfig) {
		super(config?.name);
		this.state = config?.state ?? {};
		this.disableState = config?.disableState ?? false;
	}

	/**
	 * The hook for listen event state changes
	 * @param {string} name State name
	 * @param {Function} callback Callback
	 * @param {any[]} deps Array change vars
	 * @returns {void}
	 */
	public static useEvent = this.instance.useEvent;
	
	/**
	 * The hook for change state variable
	 * @param {string} name State name
	 * @param {any} initialValue Initial value
	 * @returns {TuseStateReturn<T>}
	 */
	public static useState = this.instance.useState;

	/**
	 * Create event state listener
	 * @param {string} name State name
	 * @param {Function} callback Callback
	 * @returns {Event}
	 */
	public static createListener = this.instance.createListener;

	/**
	 * Set state by name
	 * @param {string|{[index: string]: any}} nameOrObject State name or object key - value
	 * @param {any} data Any data
	 * @returns {void}
	 */
	public static setState = this.instance.setState;


	/**
	 * Create store experimental method
	 * @param {TConfigStore} config
	 * @returns {TStore<T>}
	 */
	public static createStore<T>(config: TConfigStore): TStore<T> {
		const instance = new Ext();
		
		return {
			name: config.name,
			useState: () => instance.useState(config.name)[0],
			setState: (value) => instance.setState(config.name, value)
		}
	}
}

export {Event};
export const useState = Ext.useState;
export const useEvent = Ext.useEvent;