(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.getInternalType = factory());
}(this, (function () { 'use strict';

  var types = {}, typesToString = types.toString, buildInList = [
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
  ], typedArrays = [
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
  ], maps = ["Map", "WeakMap"], sets = ["Set", "WeakSet"];
  buildInList.forEach(function (name) {
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

  return getInternalType;

})));
//# sourceMappingURL=get-internal-type.js.map
