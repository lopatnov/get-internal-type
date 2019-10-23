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
    let actual = getInternalType('');
    let expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of a string", () => {
    let actual = getInternalType('Some string');
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
    let actual2 = getInternalType(Symbol(''));
    let actual3 = getInternalType(Symbol('Test'));
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
    class ClassTest{}

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
