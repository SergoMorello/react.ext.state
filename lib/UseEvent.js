"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const easy_event_emitter_1 = __importDefault(require("easy-event-emitter"));
function useEvent(event, callback, deps = []) {
    react_1.default.useEffect(() => {
        const listener = easy_event_emitter_1.default.addListener(event, callback);
        return () => {
            listener.remove();
        };
    }, deps);
}
exports.default = useEvent;
;
