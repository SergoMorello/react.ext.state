import Core from "./Core";

export default class Ext extends Core {
	private static instance = new Ext();
	
	public static useState =  this.instance.useState;
	public static useEvent = this.instance.useEvent;

	constructor(group?: string) {
		super(group);
	}

	public static set(name: string, data: any) {
		this.instance.events.emit(name, data);
	}
}

export const useState = Ext.useState;
export const useEvent = Ext.useEvent;