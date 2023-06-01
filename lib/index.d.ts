import Core from "./Core";
export default class Ext extends Core {
    private static instance;
    static useState: <T>(name: string, initalValue?: any) => T | undefined;
    static useEvent: (name: string, callback: Function, deps?: any[]) => void;
    constructor(group?: string);
    static set(name: string, data: any): void;
}
export declare const useState: <T>(name: string, initalValue?: any) => T | undefined;
export declare const useEvent: (name: string, callback: Function, deps?: any[]) => void;
