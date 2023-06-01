"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const easy_event_emitter_1 = __importDefault(require("easy-event-emitter"));
class Core {
    constructor(group) {
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.events = new easy_event_emitter_1.default(group);
        this.useEvent = this.useEvent.bind(this);
        this.useState = this.useState.bind(this);
    }
    useEvent(name, callback, deps = []) {
        react_1.default.useEffect(() => {
            const listener = this.events.addListener(name, callback);
            return () => {
                listener.remove();
            };
        }, deps);
    }
    useState(name, initalValue) {
        const [state, setState] = react_1.default.useState(initalValue);
        this.useEvent(name, setState);
        return state;
    }
}
exports.default = Core;
