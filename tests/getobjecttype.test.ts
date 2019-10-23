import getInternalType from "../src/get-internal-type";

describe("Primitive tests", () => {
  it("should get type of boolean false", () => {
    let actual = getInternalType(false);
    let expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of boolean true", () => {
    let actual = getInternalType(true);
    let expected = "boolean";

    expect(actual).toBe(expected);
  });
  it("should get type of empty string", () => {
    let actual = getInternalType('');
    let expected = "string";

    expect(actual).toBe(expected);
  });
  it("should get type of string", () => {
    let actual = getInternalType('Some string');
    let expected = "string";

    expect(actual).toBe(expected);
  });
});
