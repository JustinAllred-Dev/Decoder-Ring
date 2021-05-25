const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
describe("caesar", () => {
  it("should return the correct message with proper spacing, no capital letters, and non-alphabetical characters.", () => {
    const input = "Hey there!";
    const shift = 2;
    const expected = "jga vjgtg!";
    const actual = caesar("Hey there!", 2, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("can loop around past the the last letter and reach it's correct letter.", () => {
    const input = "xyz";
    const shift = 3;
    const expected = "abc";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("can loop past the first letter and reach it's correct letter.", () => {
    const input = "abc";
    const shift = -3;
    const expected = "xyz";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("can decode properly", () => {
    const input = "jga vjgtg!";
    const shift = 2;
    const expected = "hey there!";
    const actual = caesar("jga vjgtg!", 2, (encode = false));
    expect(actual).to.equal(expected);
  });
  it("returns false if shift is not defined", () => {
    const input = "abc";
    const shift = "";
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
});
