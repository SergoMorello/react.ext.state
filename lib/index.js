"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvent = exports.useState = void 0;
const Core_1 = __importDefault(require("./Core"));
/** React Ext state */
class Ext extends Core_1.default {
    /**
     * Create Ext State instance
     * @param {IConfig} config Configure object
     */
    constructor(config) {
        var _b, _c;
        super(config === null || config === void 0 ? void 0 : config.name);
        this.state = (_b = config === null || config === void 0 ? void 0 : config.state) !== null && _b !== void 0 ? _b : {};
        this.disableState = (_c = config === null || config === void 0 ? void 0 : config.disableState) !== null && _c !== void 0 ? _c : false;
    }
}
_a = Ext;
Object.defineProperty(Ext, "instance", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Ext()
});
/**
 * The hook for listen event state changes
 * @param {string} name State name
 * @param {Function} callback Callback
 * @param {any[]} deps Array change vars
 * @returns {void}
 */
Object.defineProperty(Ext, "useEvent", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _a.instance.useEvent
});
/**
 * The hook for change state variable
 * @param {string} name State name
 * @param {any} initialValue Initial value
 * @returns {any}
 */
Object.defineProperty(Ext, "useState", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _a.instance.useState
});
/**
 * Set state by name
 * @param {string|{[index: string]: any}} nameOrObject State name or object key - value
 * @param {any} data Any data
 * @returns {void}
 */
Object.defineProperty(Ext, "setState", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _a.instance.setState
});
exports.default = Ext;
exports.useState = Ext.useState;
exports.useEvent = Ext.useEvent;
