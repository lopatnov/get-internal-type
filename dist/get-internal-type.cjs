'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const types = {};
const typesToString = Object.prototype.toString;
const builtInList = [
    "Boolean",
    "Number",
    "String",
    "Array",
    "Date",
    "RegExp",
    "Object",
    "Error",
    "Promise",
    "DataView",
    "WeakRef",
    "FinalizationRegistry"
];
const functions = ["Function", "AsyncFunction"];
const generators = ["Generator", "AsyncGenerator"];
const generatorFunctions = ["GeneratorFunction", "AsyncGeneratorFunction"];
const arrayBuffers = ["ArrayBuffer", "SharedArrayBuffer"];
const maps = ["Map", "WeakMap"];
const sets = ["Set", "WeakSet"];
const typedArrays = [
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
builtInList.forEach(function (name) {
    types["[object " + name + "]"] = name.toLowerCase();
});
functions.forEach(function (name) {
    types["[object " + name + "]"] = "function";
});
generators.forEach(function (name) {
    types["[object " + name + "]"] = "generator";
});
generatorFunctions.forEach(function (name) {
    types["[object " + name + "]"] = "generatorfunction";
});
arrayBuffers.forEach(function (name) {
    types["[object " + name + "]"] = "arraybuffer";
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
exports.getInternalType = getInternalType;

module.exports = exports.default;
Object.assign(module.exports, exports);
//# sourceMappingURL=get-internal-type.cjs.map
