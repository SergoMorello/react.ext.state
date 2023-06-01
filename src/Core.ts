import React from "react";
import EventEmitter,{ Events } from "easy-event-emitter";

export default class Core {
	protected events: Events;

	constructor(group?: string) {
		this.events = new EventEmitter(group);
		this.useEvent = this.useEvent.bind(this);
		this.useState = this.useState.bind(this);
	}

	public useEvent(name: string, callback: Function, deps: any[] = []): void {
		React.useEffect(() => {
			const listener = this.events.addListener(name, callback);
			return () => {
				listener.remove();
			}
		}, deps);
	}

	public useState<T>(name: string, initalValue?: any): T | undefined {
		const [state, setState] = React.useState<T>(initalValue);
		this.useEvent(name, setState);
		return state;
	}
}