import { Events } from "easy-event-emitter";
export default class Core {
    protected events: Events;
    constructor(group?: string);
    useEvent(name: string, callback: Function, deps?: any[]): void;
    useState<T>(name: string, initalValue?: any): T | undefined;
}
