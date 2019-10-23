import getInternalType from "../src/get-internal-type";

describe("Primitive tests", () => {
  it("should get type of string", () => {
    let actual = getInternalType('Some string');
    let expected = "string";

    expect(actual).toBe(expected);
  });
});
