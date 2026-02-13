(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.getInternalType = {}));
})(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=get-internal-type.umd.js.map
