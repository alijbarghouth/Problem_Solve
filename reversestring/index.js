// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, characters) => characters + reversed, "");
}

module.exports = reverse;


// sol one
// ali jamal bar
// function reverse(str) {
//    return str.split("")
//    .reverse()
//    .join("");
//  }

//----------------------------------------------------------------

// sol two

// function reverse(str) {
//     let arr = [...str];
//     let j = arr.length - 1
//     let i = 0
//     let chars = "";
//     while (i < j) {
//         chars = arr[i]
//         arr[i] = arr[j]
//         arr[j] = chars
//         i++;
//         j--;
//     }
//     return arr.join("")
// }

//----------------------------------------------------------------

// sol three

// function reverse(str) {
//    let revresed = "";
//    for(let characters of str) {
//       revresed = characters + revresed;
//    }
//    return revresed;
// }

