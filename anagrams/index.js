// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringA.length) {
    return false;
  }
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(string) {
  return string.replace(/[^\w]/g, "").split("").sort().join("");
}
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     if (stringA.length != stringB.length) return false;
//     let mapStringA = buildCharMap(stringA);
//     let mapStringB = buildCharMap(stringB);
//     for (let key in mapStringA) {
//       if (mapStringA[key] != mapStringB[key]) return false;
//     }
//     return true;
//   }

//   function buildCharMap(str) {
//     let charMap = {};
//     for (let chars of str.replace(/[^\w]/g, "").toLowerCase()) {
//       charMap[chars] = charMap[chars] + 1 || 1;
//     }
//     return charMap;
//   }
