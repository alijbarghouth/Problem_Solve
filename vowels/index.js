// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  let checker = ['a','e','o','i','u'];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;

// function vowels(str) {
//     let vowelsstr = str.match(/[aeiou]/gi);
//     return vowelsstr?.length ? vowelsstr.length : 0;
//   }
