import { fizzbuzz } from "./main.js";

describe("Given a fizzbuzz function", () => {
  describe("When it receives 1, 5", () => {
    test("Then it should returns 1, 2, fizz, 4, buzz", () => {
      const start = 1;
      const end = 5;
      const result = fizzbuzz(start, end);
      const expectedResult = [1, 2, "fizz", 4, "buzz"];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
