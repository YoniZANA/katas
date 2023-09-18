import { Fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz test", () => {
  let fizzBuzz: Fizzbuzz;
  beforeEach(() => {
    fizzBuzz = new Fizzbuzz();
  });
  describe("Rule: Display the number if this number is not multiple of 3 or 5", () => {
    it("should print 1 if number is 1", () => {
      expect(fizzBuzz.generate(1, 1)).toEqual("1");
    });
    it("should print 2 if number is 2", () => {
      expect(fizzBuzz.generate(2, 2)).toEqual("2");
    });
  });
  describe("Rule: Display FIZZ if the number is multiple of 3", () => {
    it("should print FIZZ if number is 3", () => {
      expect(fizzBuzz.generate(3, 3)).toEqual("FIZZ");
    });
    it("should print FIZZ if number is 6", () => {
      expect(fizzBuzz.generate(6, 6)).toEqual("FIZZ");
    });
  });
  describe("Rule: Display BUZZ if the number is multiple of 5", () => {
    it("should print BUZZ if number is 5", () => {
      expect(fizzBuzz.generate(5, 5)).toEqual("BUZZ");
    });
    it("should print BUZZ if number is 10", () => {
      expect(fizzBuzz.generate(10, 10)).toEqual("BUZZ");
    });
  });
  describe("Rule: Display FIZZBUZZ if the number is multiple of 15", () => {
    it("should print FIZZBUZZ if number is 15", () => {
      expect(fizzBuzz.generate(15, 15)).toEqual("FIZZBUZZ");
    });
    it("should print BUZZ if number is 30", () => {
      expect(fizzBuzz.generate(30, 30)).toEqual("FIZZBUZZ");
    });
  });
  describe("Rule: Display the list of value of FIZZBUZZ from the min and max", () => {
    it("should print 12 if the number are 1 and 2", () => {
      expect(fizzBuzz.generate(1, 2)).toEqual("12");
    });
    it("should print 12FIZZ if the numbers are 1 to 3", () => {
      expect(fizzBuzz.generate(1, 3)).toEqual("12FIZZ");
    });
  });
});
