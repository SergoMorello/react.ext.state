"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const easy_event_emitter_1 = __importDefault(require("easy-event-emitter"));
class Core {
    constructor(groupName) {
        var _a;
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "disableState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.state = {};
        this.disableState = false;
        this.name = (_a = groupName) !== null && _a !== void 0 ? _a : this.constructor.name;
        this.events = new easy_event_emitter_1.default((groupName !== null && groupName !== void 0 ? groupName : this.constructor.name.length > 0) ? this.constructor.name : undefined);
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
    useEvent(name, callback, deps = []) {
        react_1.default.useEffect(() => {
            const listener = this.events.addListener(name, callback);
            return () => {
                listener.remove();
            };
        }, deps);
    }
    /**
     * The hook for change state variable
     * @param {string} name State name
     * @param {any} initialValue Initial value
     * @returns {any}
     */
    useState(name, initialValue) {
        var _a;
        const [state, setState] = react_1.default.useState(initialValue !== null && initialValue !== void 0 ? initialValue : (_a = this.state) === null || _a === void 0 ? void 0 : _a[name]);
        this.useEvent(name, setState);
        if (!(name in this.state) && initialValue) {
            this.state[name] = initialValue;
        }
        return state;
    }
    /**
     * Create event state listener
     * @param {string} name State name
     * @param {Function} callback Callback
     * @returns {Event}
     */
    createListener(name, callback) {
        return this.events.addListener(name, callback);
    }
    /**
     * Emit and save state
     * @param {string} name State name
     * @param {any} data
     * @returns {void}
     */
    emitState(name, data) {
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
    setState(nameOrObject, data) {
        if (typeof nameOrObject === 'string') {
            this.emitState(nameOrObject, data);
        }
        else if (typeof nameOrObject === 'object') {
            Object.keys(nameOrObject).map((name) => this.emitState(name, nameOrObject[name]));
        }
    }
}
exports.default = Core;
