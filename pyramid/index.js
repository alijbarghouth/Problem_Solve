// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, steps = "") {
  const midPoint = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }
  if (steps.length === 2 * n - 1) {
    console.log(steps);
    return pyramid(n, row + 1);
  }
  if (
    midPoint - row <= steps.length &&
    midPoint + row >= steps.length 
  ) {
    steps += "#";
  } else {
    steps += " ";
  }
  pyramid(n, row, steps);
}

module.exports = pyramid;

// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let steps = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midPoint - row <= col && midPoint + row >= col) {
//         steps += "#";
//       } else {
//         steps += " ";
//       }
//     }
//     console.log(steps);
//   }
// }
