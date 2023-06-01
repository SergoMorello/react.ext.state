"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvent = exports.useState = void 0;
const Core_1 = __importDefault(require("./Core"));
class Ext extends Core_1.default {
    constructor(group) {
        super(group);
    }
    static set(name, data) {
        this.instance.events.emit(name, data);
    }
}
_a = Ext;
Object.defineProperty(Ext, "instance", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Ext()
});
Object.defineProperty(Ext, "useState", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _a.instance.useState
});
Object.defineProperty(Ext, "useEvent", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _a.instance.useEvent
});
exports.default = Ext;
exports.useState = Ext.useState;
exports.useEvent = Ext.useEvent;
