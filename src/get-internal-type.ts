let types: any = {},
  typesToString: any = types.toString;

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
].forEach(function(name) {
  types["[object " + name + "]"] = name.toLowerCase();
});

export default function getInternalType(obj: any): string {
  return obj == null
    ? obj + ""
    : typeof obj === "object" || typeof obj === "function"
    ? types[typesToString.call(obj)] || "object"
    : typeof obj;
}
