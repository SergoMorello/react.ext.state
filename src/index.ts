import Core from "./Core";
import { IConfig } from "./Types";

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
	 * @returns {any}
	 */
	public static useState =  this.instance.useState;

	/**
	 * Set state by name
	 * @param {string|{[index: string]: any}} nameOrObject State name or object key - value
	 * @param {any} data Any data
	 * @returns {void}
	 */
	public static setState = this.instance.setState;
}

export const useState = Ext.useState;
export const useEvent = Ext.useEvent;