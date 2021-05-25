const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius", () => {
  it("returns the correct encoded message with correct spacing, regardless of capitalization.", () => {
    const input = "Abc a";
    const expected = "112131 11";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("returns the correct decoded message, displaying (i/j) when 42 is inputted.", () => {
    const input = "42 52";
    const expected = "(i/j) k";
    const actual = polybius(input, (encode = false));
    expect(actual).to.equal(expected);
  });
});
