// function romanToInt(s: string): number {
//   const symVals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     result += symVals[s[i]];
//     if (i > 0) {
//       if ((s[i] === "V" || s[i] === "X") && s[i - 1] === "I") {
//         result -= 2;
//       }
//       if ((s[i] === "L" || s[i] === "C") && s[i - 1] === "X") {
//         result -= 20;
//       }
//       if ((s[i] === "D" || s[i] === "M") && s[i - 1] === "C") {
//         result -= 200;
//       }
//     }
//   }

//   return result;
// }

function romanToInt(s: string): number {
  const symVals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  s = s.replace("IV", "IIII").replace("IX", "VIIII");
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC");

  for (let i = 0; i < s.length; i++) {
    result += symVals[s[i]];
  }

  return result;
}

// function romanToInt(s: string): number {
//   const symVals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = symVals[s[s.length - 1]];

//   for (let i = s.length - 2; i >= 0; i--) {
//     if (symVals[s[i]] < symVals[s[i + 1]]) {
//       result -= symVals[s[i]];
//     } else {
//       result += symVals[s[i]];
//     }
//   }
//   return result;
// }

console.log(romanToInt("DM"));
