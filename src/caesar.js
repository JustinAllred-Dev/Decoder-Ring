// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // Steps of this function:
  //1) Define an array consisting of an alphabet
  //2) Create a for/in loop that loops through the input and defines the position of
  // each character on the alphabet array
  //3) use the Shift parameter to move the selected letter to the letter at the
  // new position on the alphabet array
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const inputFormatted = [...input.toLowerCase()];
    const encodedMessageArray = [];
    // Only if statement needed to account for encode value change
    if (encode === false) {
      shift = shift * -1;
    }
    // Duel for/in loops to cross compare the two arrays
    for (let selected in inputFormatted) {
      const character = inputFormatted[selected];

      for (let selected in alphabet) {
        const letter = alphabet[selected];

        if (character == letter) {
          const position = alphabet.indexOf(letter);

          let encodedPosition = position + shift;
          // These two if statements account for looping over the ends of the alphabet
          if (encodedPosition > 25) {
            encodedPosition += -26;
          }
          if (encodedPosition < 0) {
            encodedPosition += 26;
          }
          const encodedLetter = alphabet[encodedPosition];
          encodedMessageArray.push(encodedLetter);
        }
      }
      // will push any spaces or special characters to the resulting message
      if (alphabet.includes(character) === false) {
        encodedMessageArray.push(character);
      }
    }
    return encodedMessageArray.join("");
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
