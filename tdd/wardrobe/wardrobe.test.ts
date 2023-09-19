import { Wardrobe } from "./wardrobe";

describe("Test Wardrobe", () => {
  let wardrobe: Wardrobe;
  beforeEach(() => {
    wardrobe = new Wardrobe();
  });
  describe("Rule: Return the wardrobe if the size is the same than the wall", () => {
    it("should print 1 if the wall size is 1 and the wardrobe size is 1", () => {
      expect(wardrobe.generateCombinations(1, [1])).toEqual([1]);
    });
    it("should print 2 if the wall size is 2 and the wardrobe size is 2", () => {
      expect(wardrobe.generateCombinations(2, [2])).toEqual([2]);
    });
  });
  describe("Rule: return anything if the wall is smaller than the wardrobe available", () => {
    it("should print anything if the wall size is 1 and the wardrobe is 2 ", () => {
      expect(wardrobe.generateCombinations(1, [2])).toEqual([]);
    });
    it("should print anything if the wall size is 2 and the wardrobe is 3 ", () => {
      expect(wardrobe.generateCombinations(2, [3])).toEqual([]);
    });
  });
  describe("Rule: Return 2 combinations if there is several combinations available to fit the wall", () => {
    it("should print the combination [[1, 1], [2] if the wall size is 2 and the wardrobes are 1 and 2", () => {
      expect(wardrobe.generateCombinations(2, [1, 2])).toEqual([[1, 1], [2]]);
    });
    it("should print the combination [[1, 1, 1], [2, 1] if the wall size is 3 and the wardrobes are 1 and 2", () => {
      expect(wardrobe.generateCombinations(3, [1, 2])).toEqual([
        [1, 1, 1],
        [2, 1],
      ]);
    });
  });

  /*it("should print 50 if the the wall measure 50cm", () => {
    expect(wardrobe.generateCombinations(50)).toEqual([50]);
  });
  it("should print 75 if the wall measure 75cm", () => {
    expect(wardrobe.generateCombinations(75)).toEqual([75]);
  });
  it("should print the combination [50, 50] and 100 if the wall measure 100cm", () => {
    expect(wardrobe.generateCombinations(100)).toEqual([[50, 50], [100]]);
  });
  it("should print the combination [50, 50, 50] and [100, 50] if the wall measure 150cm", () => {
    expect(wardrobe.generateCombinations(150)).toEqual([
      [50, 50, 50],
      [100, 50],
    ]);
  });*/
});
