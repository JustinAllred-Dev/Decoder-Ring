// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //1) Create an alphabet array to compare with the substitution array
  //2) Check to make sure if the inputted substitution alphabet meets the correct requirements of length and character uniqueness
  //3) Create encode and decode code blocks
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const alphabetFormatted = [...alphabet];
    // Method to determine if every character in the alphabetFormatted array is unique
    for (let i = 0; i < alphabetFormatted.length; i++) {
      for (let j = i + 1; j < alphabetFormatted.length; j++) {
        if (alphabetFormatted[i] == alphabetFormatted[j]) {
          return false;
        }
      }
    }
    const standardAlphabet = [
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
    const inputDecapitalized = input.toLowerCase();
    const inputFormatted = [...inputDecapitalized];
    // With this block of code I create 3 for/in loops in order to compare all three arrays used for decoding.
    // After getting the index positions of each input character in relation to the "before" array
    //(depending on if you are encoding or decoding,) this function then applies the selected index to the
    // "after" array in order to create a new message comprised of the characters related to those indexes.
    if (encode === true) {
      const encodedMessage = [];
      for (let selected in inputFormatted) {
        const inputCharacter = inputFormatted[selected];
        if (inputCharacter === " ") {
          encodedMessage.push(inputCharacter);
        }
        for (let selected in standardAlphabet) {
          const standardAlphabetPosition = standardAlphabet[selected];
          if (inputCharacter === standardAlphabetPosition) {
            const encoderIndex = standardAlphabet.indexOf(
              standardAlphabetPosition
            );
            for (let selected in alphabetFormatted) {
              const subAlphabetPosition = alphabetFormatted[selected];
              if (
                alphabetFormatted.indexOf(subAlphabetPosition) === encoderIndex
              ) {
                encodedMessage.push(subAlphabetPosition);
              }
            }
          }
        }
      }
      return encodedMessage.join("");
      //This block essentially does the same as the above block, however the variables for the "before" array
      // for loop are swapped with the "after" array variables.
    } else {
      const decodedMessage = [];
      for (let selected in inputFormatted) {
        const inputCharacter = inputFormatted[selected];
        if (inputCharacter === " ") {
          decodedMessage.push(inputCharacter);
        }
        for (let selected in alphabetFormatted) {
          const subAlphabetPosition = alphabetFormatted[selected];
          if (inputCharacter === subAlphabetPosition) {
            const decoderIndex = alphabetFormatted.indexOf(subAlphabetPosition);
            for (let selected in standardAlphabet) {
              const standardAlphabetPosition = standardAlphabet[selected];
              if (
                standardAlphabet.indexOf(standardAlphabetPosition) ===
                decoderIndex
              ) {
                decodedMessage.push(standardAlphabetPosition);
              }
            }
          }
        }
      }
      return decodedMessage.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
