var getInternalType = require("../dist/get-internal-type.js");

describe("Tests for Generators", () => {
    it("should get type of a Generator", () => {
      function* idMaker() {
        var index = 0;
        while (true) yield index++;
      }

      let gen = idMaker();
      let actual = getInternalType(gen);
      let expected = "generator";

      expect(actual).toBe(expected);
    });

    it("should get type of a GeneratorFunction", () => {
      function* idMaker() {
        var index = 0;
        while (true) yield index++;
      }

      let actual = getInternalType(idMaker);
      let expected = "generatorfunction";

      expect(actual).toBe(expected);
    });
  });
