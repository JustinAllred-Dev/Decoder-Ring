const expect = require("chai").expect;
const { substitution } = require("../src/substitution");
describe("substitution", () => {
  it("should correctly encode a message for a given alphabet, ignoring capitalization and with respect for spaces.", () => {
    const input = "Ab c";
    const alphabet = "xyzabcdefghijklmnopqrstuvw";
    const expected = "xy z";
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should correctly decode a message for a given alphabet, with respect to special characters.", () => {
    const input = "#xx";
    const alphabet = "#xyzabcdefghijklmnopqrstuv";
    const expected = "abb";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
  it("returns false if the alphabet length is not 26.", () => {
    const input = "abc";
    const alphabet = "abcdef";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters.", () => {
    const input = "Ab c";
    const alphabet = "xyzabcdefghijklmnopqrstuv";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not exist", () => {
    const input = "Ab c";
    const alphabet = "";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});
