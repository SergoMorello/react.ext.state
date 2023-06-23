"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Component extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log(123);
    }
    componentWillUnmount() {
    }
}
exports.default = Component;
