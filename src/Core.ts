import React from "react";
import EventEmitter,{
	Events,
	Event
} from "easy-event-emitter";
import {
	TState,
	TuseStateReturn
} from "./Types";

export default abstract class Core {
	protected events: Events;
	protected state: TState;
	protected disableState: boolean;
	public readonly name: string;

	constructor(groupName?: string) {
		this.state = {};
		this.disableState = false;
		this.name = <string>groupName ?? this.constructor.name;
		this.events = new EventEmitter(groupName ?? this.constructor.name.length > 0 ? this.constructor.name : undefined);
		this.useEvent = this.useEvent.bind(this);
		this.useState = this.useState.bind(this);
		this.setState = this.setState.bind(this);
		this.createListener = this.createListener.bind(this);
	}

	/**
	 * The hook for listen event state changes
	 * @param {string} name State name
	 * @param {Function} callback Callback
	 * @param {any[]} deps Array change vars
	 * @returns {void}
	 */
	public useEvent(name: string, callback: Function, deps: any[] = []): void {
		React.useEffect(() => {
			const listener = this.events.addListener(name, callback);
			return () => {
				listener.remove();
			}
		}, deps);
	}

	/**
	 * The hook for change state variable
	 * @param {string} name State name
	 * @param {any} initialValue Initial value
	 * @returns {TuseStateReturn<T>}
	 */
	public useState<T>(name: string, initialValue?: any): TuseStateReturn<T> {
		const [state, setState] = React.useState<T>(initialValue ?? this.state?.[name]);
		this.useEvent(name, setState);
		if (!(name in this.state) && initialValue) {
			this.state[name] = initialValue;
		}
		return [state, (data) => this.setState(name, data)];
	}


	/**
	 * Create event state listener
	 * @param {string} name State name
	 * @param {Function} callback Callback
	 * @returns {Event}
	 */
	public createListener(name: string, callback: Function): Event {
		return this.events.addListener(name, callback);
	}

	/**
	 * Emit and save state
	 * @param {string} name State name
	 * @param {any} data
	 * @returns {void}
	 */
	private emitState(name: string, data: any): void {
		this.events.emit(name, data);
		if (!this.disableState) {
			this.state[name] = data;
		}
	}

	/**
	 * Set state by name
	 * @param {string|TState} nameOrObject State name or object key - value
	 * @param {any} data Any data
	 * @returns {void}
	 */
	public setState(nameOrObject: string | TState, data: any): void {
		if (typeof nameOrObject === 'string') {
			this.emitState(nameOrObject, data);
		}else if (typeof nameOrObject === 'object') {
			Object.keys(nameOrObject).map((name) => this.emitState(name, nameOrObject[name]))
		}
	}
}