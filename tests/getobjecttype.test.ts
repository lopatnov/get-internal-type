import getInternalType from "../src/get-internal-type";

describe("Primitive types tests", () => {
  it("should get type of undefined", () => {
    const actual = getInternalType(undefined);
    const expected = "undefined";

    expect(actual).toBe(expected);
  });
  it("should get type of null", () => {
    const actual = getInternalType(null);
    const expected = "null";

    expect(actual).toBe(expected);
  });
  it("should get type of the boolean value false", () => {
    const actual = getInternalType(false);
    const expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of the boolean value true", () => {
    const actual = getInternalType(true);
    const expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of the empty string", () => {
    const actual = getInternalType("");
    const expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of a string", () => {
    const actual = getInternalType("Some string");
    const expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of the number zero", () => {
    const actual = getInternalType(0);
    const expected = "number";

    expect(actual).toBe(expected);
  });
  it("should get type of a number", () => {
    const actual = getInternalType(123);
    const expected = "number";

    expect(actual).toBe(expected);
  });
  it("should get type of the NAN", () => {
    const actual1 = getInternalType(NaN);
    const actual2 = getInternalType(Number.NaN);
    const expected = "number";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  it("should get type of a special numbers", () => {
    const actual1 = getInternalType(Number.NaN);
    const actual2 = getInternalType(Number.EPSILON);
    const actual3 = getInternalType(Number.POSITIVE_INFINITY);
    const actual4 = getInternalType(Number.NEGATIVE_INFINITY);
    const actual5 = getInternalType(Number.MAX_SAFE_INTEGER);
    const actual6 = getInternalType(Number.MIN_SAFE_INTEGER);
    const actual7 = getInternalType(Number.MAX_VALUE);
    const actual8 = getInternalType(Number.MIN_VALUE);
    const expected = "number";

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
    const bi = BigInt(9007199254740991);
    const actual = getInternalType(bi);
    const expected = "bigint";

    expect(actual).toBe(expected);
  });
  it("should get type of a symbol", () => {
    const actual1 = getInternalType(Symbol());
    const actual2 = getInternalType(Symbol(""));
    const actual3 = getInternalType(Symbol("Test"));
    const expected = "symbol";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
    expect(actual3).toBe(expected);
  });
});

describe("Tests for functions", () => {
  it("should get type of an anonymous function", () => {
    const actual = getInternalType(function () {});
    const expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a named function", () => {
    function theTest() {}

    const actual = getInternalType(theTest);
    const expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a lambda function", () => {
    const actual = getInternalType(() => {});
    const expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a class", () => {
    class ClassTest {}

    const actual = getInternalType(ClassTest);
    const expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of a generated function", () => {
    const actual = getInternalType(Function(""));
    const expected = "function";

    expect(actual).toBe(expected);
  });
  it("should get type of an async function", () => {
    const actual = getInternalType(async function () {});
    const expected = "function";

    expect(actual).toBe(expected);
  });
});

describe("Tests for objects", () => {
  it("should get type of an object", () => {
    const actual = getInternalType({});
    const expected = "object";

    expect(actual).toBe(expected);
  });
  it("should get type of an object created from a class", () => {
    class ObjectTestClass {}

    const actual = getInternalType(new ObjectTestClass());
    const expected = "object";

    expect(actual).toBe(expected);
  });
  it("should get type of an build-in object", () => {
    const actual1 = getInternalType(Math);
    const actual2 = getInternalType(global);
    const expected = "object";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  it("should get type of arguments", () => {
    let actual: string | undefined;
    const expected = "object";

    function testArguments() {
      actual = getInternalType(arguments); // eslint-disable-line prefer-rest-params
    }

    testArguments();

    expect(actual).toBe(expected);
  });
});

describe("Tests for date", () => {
  it("should get type of current date", () => {
    const actual = getInternalType(new Date());
    const expected = "date";

    expect(actual).toBe(expected);
  });
});

describe("Tests for maps", () => {
  it("should get type of the empty map", () => {
    const actual = getInternalType(new Map());
    const expected = "map";

    expect(actual).toBe(expected);
  });
  it("should get type of a map", () => {
    const actual = getInternalType(
      new Map([
        [1, 2],
        [3, 4]
      ])
    );
    const expected = "map";

    expect(actual).toBe(expected);
  });
  it("should get type of a weak map", () => {
    const actual = getInternalType(new WeakMap());
    const expected = "map";

    expect(actual).toBe(expected);
  });
});

describe("Tests for sets", () => {
  it("should get type of the empty set", () => {
    const actual = getInternalType(new Set());
    const expected = "set";

    expect(actual).toBe(expected);
  });
  it("should get type of a set", () => {
    const actual = getInternalType(new Set([1, 2, 3]));
    const expected = "set";

    expect(actual).toBe(expected);
  });
  it("should get type of a weak set", () => {
    const actual = getInternalType(new WeakSet());
    const expected = "set";

    expect(actual).toBe(expected);
  });
});

describe("Tests for arrays", () => {
  it("should get type of an array", () => {
    const actual = getInternalType([]);
    const expected = "array";

    expect(actual).toBe(expected);
  });
  it("should get type of a typed array Int8Array", () => {
    const typedArray1 = new Int8Array(8);
    typedArray1[0] = 32;
    const typedArray2 = new Int8Array(typedArray1);
    typedArray2[1] = 42;

    const actual1 = getInternalType(typedArray1);
    const actual2 = getInternalType(typedArray2);
    const expected = "typedarray";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  it("should get type of all typed array variants", () => {
    const expected = "typedarray";

    expect(getInternalType(new Uint8Array(4))).toBe(expected);
    expect(getInternalType(new Uint8ClampedArray(4))).toBe(expected);
    expect(getInternalType(new Int16Array(4))).toBe(expected);
    expect(getInternalType(new Uint16Array(4))).toBe(expected);
    expect(getInternalType(new Int32Array(4))).toBe(expected);
    expect(getInternalType(new Uint32Array(4))).toBe(expected);
    expect(getInternalType(new Float32Array(4))).toBe(expected);
    expect(getInternalType(new Float64Array(4))).toBe(expected);
    expect(getInternalType(new BigInt64Array(4))).toBe(expected);
    expect(getInternalType(new BigUint64Array(4))).toBe(expected);
  });
});

describe("Tests for RegExp", () => {
  it("should get type of an RegExp", () => {
    const actual1 = getInternalType(new RegExp("s+", "gi"));
    const actual2 = getInternalType(/s+/gi);
    const expected = "regexp";

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
});

describe("Tests for errors", () => {
  it("should get type of an error", () => {
    const actual = getInternalType(new Error("Test mistake"));
    const expected = "error";

    expect(actual).toBe(expected);
  });
  it("should get type of error subclasses", () => {
    const expected = "error";

    expect(getInternalType(new TypeError("type"))).toBe(expected);
    expect(getInternalType(new RangeError("range"))).toBe(expected);
    expect(getInternalType(new SyntaxError("syntax"))).toBe(expected);
    expect(getInternalType(new ReferenceError("ref"))).toBe(expected);
    expect(getInternalType(new URIError("uri"))).toBe(expected);
    expect(getInternalType(new EvalError("eval"))).toBe(expected);
  });
});

describe("Tests for Promise", () => {
  it("should get type of a Promise", () => {
    const actual = getInternalType(Promise.resolve("any"));
    const expected = "promise";

    expect(actual).toBe(expected);
  });
});

describe("Tests for generators", () => {
  it("should get type of a Generator", () => {
    function* idMaker() {
      let index = 0;
      while (true) yield index++;
    }

    const gen = idMaker();
    const actual = getInternalType(gen);
    const expected = "generator";

    expect(actual).toBe(expected);
  });

  it("should get type of a GeneratorFunction", () => {
    function* idMaker() {
      let index = 0;
      while (true) yield index++;
    }

    const actual = getInternalType(idMaker);
    const expected = "generatorfunction";

    expect(actual).toBe(expected);
  });
});

describe("Tests for structured data", () => {
  it("should get type of an ArrayBuffer", () => {
    const buffer = new ArrayBuffer(8);
    const view = new Int32Array(buffer);
    const actual1 = getInternalType(buffer);
    const actual2 = getInternalType(view);
    const expected1 = "arraybuffer";
    const expected2 = "typedarray";

    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });
  it("should get type of a DataView", () => {
    const buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);
    const actual = getInternalType(view);
    const expected = "dataview";

    expect(actual).toBe(expected);
  });
});

describe("Tests for async generators", () => {
  it("should get type of an AsyncGeneratorFunction", () => {
    async function* asyncIdMaker() {
      let index = 0;
      while (true) yield index++;
    }

    const actual = getInternalType(asyncIdMaker);
    const expected = "generatorfunction";

    expect(actual).toBe(expected);
  });

  it("should get type of an AsyncGenerator", () => {
    async function* asyncIdMaker() {
      let index = 0;
      while (true) yield index++;
    }

    const gen = asyncIdMaker();
    const actual = getInternalType(gen);
    const expected = "generator";

    expect(actual).toBe(expected);
  });
});

describe("Tests for weak references", () => {
  it("should get type of a WeakRef", () => {
    const obj = {};
    const actual = getInternalType(new WeakRef(obj));
    const expected = "weakref";

    expect(actual).toBe(expected);
  });

  it("should get type of a FinalizationRegistry", () => {
    const actual = getInternalType(new FinalizationRegistry(() => {}));
    const expected = "finalizationregistry";

    expect(actual).toBe(expected);
  });
});
