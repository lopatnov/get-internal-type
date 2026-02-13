const types: Record<string, string> = {};
const typesToString = Object.prototype.toString;

const builtInList = [
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

const maps = ["Map", "WeakMap"];
const sets = ["Set", "WeakSet"];

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

export default function getInternalType(obj: any): string {
  return obj == null
    ? obj + ""
    : typeof obj === "object" || typeof obj === "function"
      ? types[typesToString.call(obj)] || "object"
      : typeof obj;
}
