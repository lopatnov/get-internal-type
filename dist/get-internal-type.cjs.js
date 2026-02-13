'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = {};
var typesToString = Object.prototype.toString;
var builtInList = [
    "Boolean",
    "Number",
    "String",
    "Function",
    "Array",
    "Date",
    "RegExp",
    "Object",
    "Error",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "ArrayBuffer",
    "DataView"
];
var typedArrays = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
];
var maps = ["Map", "WeakMap"];
var sets = ["Set", "WeakSet"];
builtInList.forEach(function (name) {
    types["[object " + name + "]"] = name.toLowerCase();
});
maps.forEach(function (name) {
    types["[object " + name + "]"] = "map";
});
sets.forEach(function (name) {
    types["[object " + name + "]"] = "set";
});
typedArrays.forEach(function (name) {
    types["[object " + name + "]"] = "typedarray";
});
function getInternalType(obj) {
    return obj == null
        ? obj + ""
        : typeof obj === "object" || typeof obj === "function"
            ? types[typesToString.call(obj)] || "object"
            : typeof obj;
}

exports.default = getInternalType;

module.exports = exports.default;
Object.assign(module.exports, exports);
//# sourceMappingURL=get-internal-type.cjs.js.map
