import getInternalType from "../src/get-internal-type";

describe("Primitive types tests", () => {
  it("should get type of undefined", () => {
    let actual = getInternalType(undefined);
    let expected = "undefined";

    expect(actual).toBe(expected);
  });
  it("should get type of null", () => {
    let actual = getInternalType(null);
    let expected = "null";

    expect(actual).toBe(expected);
  });
  it("should get type of the boolean value false", () => {
    let actual = getInternalType(false);
    let expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of the boolean value true", () => {
    let actual = getInternalType(true);
    let expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of the empty string", () => {
    let actual = getInternalType("");
    let expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of a string", () => {
    let actual = getInternalType("Some string");
    let expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of the number zero", () => {
    let actual = getInternalType(0);
    let expected = "number";

    expect(actual).toBe(expected);
  });
  it("should get type of a number", () => {
    let actual = getInternalType(123);
    let expected = "number";

    expect(actual).toBe(expected);
  });
  it("should get type of the NAN", () => {
    let actual1 = getInternalType(NaN);
    let actual2 = getInternalType(Number.NaN);
    let expected = "number";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  it("should get type of a special numbers", () => {
    let actual1 = getInternalType(Number.NaN);
    let actual2 = getInternalType(Number.EPSILON);
    let actual3 = getInternalType(Number.POSITIVE_INFINITY);
    let actual4 = getInternalType(Number.NEGATIVE_INFINITY);
    let actual5 = getInternalType(Number.MAX_SAFE_INTEGER);
    let actual6 = getInternalType(Number.MIN_SAFE_INTEGER);
    let actual7 = getInternalType(Number.MAX_VALUE);
    let actual8 = getInternalType(Number.MIN_VALUE);
    let expected = "number";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
    expect(actual3).toBe(expected);
    expect(actual4).toBe(expected);
    expect(actual5).toBe(expected);
    expect(actual6).toBe(expected);
    expect(actual7).toBe(expected);
    expect(actual8).toBe(expected);
  });
  it("should get type of a BigInt", () => {
    let bi = BigInt(9007199254740991);
    let actual = getInternalType(bi);
    let expected = "bigint";

    expect(actual).toBe(expected);
  });
  it("should get type of a symbol", () => {
    let actual1 = getInternalType(Symbol());
    let actual2 = getInternalType(Symbol(""));
    let actual3 = getInternalType(Symbol("Test"));
    let expected = "symbol";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
    expect(actual3).toBe(expected);
  });
});

describe("Tests for functions", () => {
  it("should get type of an anonymous function", () => {
    let actual = getInternalType(function() {});
    let expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a named function", () => {
    let actual = getInternalType(theTest);
    let expected = "function";

    function theTest() {}

    expect(actual).toBe(expected);
  });
  it("should get type of a lambda function", () => {
    let actual = getInternalType(() => {});
    let expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a class", () => {
    class ClassTest {}

    let actual = getInternalType(ClassTest);
    let expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a generated function", () => {
    let actual = getInternalType(Function(""));
    let expected = "function";

    expect(actual).toBe(expected);
  });
});

describe("Tests for objects", () => {
  it("should get type of an object", () => {
    let actual = getInternalType({});
    let expected = "object";

    expect(actual).toBe(expected);
  });
  it("should get type of an object created from a class", () => {
    class ObjectTestClass {}

    let actual = getInternalType(new ObjectTestClass());
    let expected = "object";

    expect(actual).toBe(expected);
  });
  it("should get type of an build-in object", () => {
    let actual1 = getInternalType(Math);
    let actual2 = getInternalType(global);
    let expected = "object";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  it("should get type of arguments", () => {
    function testArguments() {
      actual = getInternalType(arguments);
    }

    let actual: string;
    let expected = "object";

    testArguments();

    expect(actual).toBe(expected);
  });
});

describe("Tests for date", () => {
  it("should get type of current date", () => {
    let actual = getInternalType(new Date());
    let expected = "date";

    expect(actual).toBe(expected);
  });
});

describe("Tests for maps", () => {
  it("should get type of the empty map", () => {
    let actual = getInternalType(new Map());
    let expected = "map";

    expect(actual).toBe(expected);
  });
  it("should get type of a map", () => {
    let actual = getInternalType(new Map([[1, 2], [3, 4]]));
    let expected = "map";

    expect(actual).toBe(expected);
  });
  it("should get type of a weak map", () => {
    let actual = getInternalType(new WeakMap());
    let expected = "map";

    expect(actual).toBe(expected);
  });
});

describe("Tests for sets", () => {
  it("should get type of the empty set", () => {
    let actual = getInternalType(new Set());
    let expected = "set";

    expect(actual).toBe(expected);
  });
  it("should get type of a set", () => {
    let actual = getInternalType(new Set([1, 2, 3]));
    let expected = "set";

    expect(actual).toBe(expected);
  });
  it("should get type of a weak set", () => {
    let actual = getInternalType(new WeakSet());
    let expected = "set";

    expect(actual).toBe(expected);
  });
});

describe("Tests for arrays", () => {
  it("should get type of an array", () => {
    let actual = getInternalType([]);
    let expected = "array";

    expect(actual).toBe(expected);
  });
  it("should get type of a typed array Int8Array", () => {
    // create a TypedArray with a size in bytes
    const typedArray1 = new Int8Array(8);
    typedArray1[0] = 32;
    const typedArray2 = new Int8Array(typedArray1);
    typedArray2[1] = 42;

    let actual1 = getInternalType(typedArray1);
    let actual2 = getInternalType(typedArray2);
    let expected = "typedarray";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
});

describe("Tests for RegExp", () => {
  it("should get type of an RegExp", () => {
    let actual1 = getInternalType(new RegExp("s+", "gi"));
    let actual2 = getInternalType(/s+/gi);
    let expected = "regexp";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
});

describe("Tests for errors", () => {
  it("should get type of an error", () => {
    let actual = getInternalType(new Error("Test mistake"));
    let expected = "error";

    expect(actual).toBe(expected);
  });
});

describe("Tests for Promise", () => {
  it("should get type of a Promise", () => {
    let actual = getInternalType(Promise.resolve("any"));
    let expected = "promise";

    expect(actual).toBe(expected);
  });
});

describe("Tests for structured data", () => {
  it("should get type of an ArrayBuffer", () => {
    var buffer = new ArrayBuffer(8);
    var view = new Int32Array(buffer);
    let actual1 = getInternalType(buffer);
    let actual2 = getInternalType(view);
    let expected1 = "arraybuffer";
    let expected2 = "typedarray";

    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });
  it("should get type of a DataView", () => {
    var buffer = new ArrayBuffer(16);
    var view = new DataView(buffer);
    let actual = getInternalType(view);
    let expected = "dataview";

    expect(actual).toBe(expected);
  });
});
