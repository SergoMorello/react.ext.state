"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UseEvent_1 = __importDefault(require("./UseEvent"));
function useState(event, initalValue) {
    const [state, setState] = react_1.default.useState(initalValue);
    (0, UseEvent_1.default)(event, setState);
    return state;
}
exports.default = useState;
;
