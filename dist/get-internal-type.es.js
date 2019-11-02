var types = {}, typesToString = types.toString;
[
    "Boolean",
    "Number",
    "String",
    "Function",
    "Array",
    "Date",
    "RegExp",
    "Object",
    "Map",
    "Set",
    "Error"
].forEach(function (name) {
    types["[object " + name + "]"] = name.toLowerCase();
});
[
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
].forEach(function (name) {
    types["[object " + name + "]"] = "TypedArray".toLowerCase();
});
function getInternalType(obj) {
    return obj == null
        ? obj + ""
        : typeof obj === "object" || typeof obj === "function"
            ? types[typesToString.call(obj)] || "object"
            : typeof obj;
}

export default getInternalType;
//# sourceMappingURL=get-internal-type.es.js.map
