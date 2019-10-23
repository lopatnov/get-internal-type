(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.getInternalType = factory());
}(this, (function () { 'use strict';

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
      "Error"
  ].forEach(function (name) {
      types["[object " + name + "]"] = name.toLowerCase();
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
