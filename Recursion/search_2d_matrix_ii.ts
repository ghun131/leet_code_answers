// function searchMatrix(matrix: number[][], target: number): boolean {
//   if (matrix.length === 0 || matrix[0].length === 0) return false;

//   const midC = Math.floor(matrix[0].length / 2);
//   let midR: number | null = null;

//   for (let i = 0; i < matrix.length; i += 1) {
//     if (i === 0 && matrix[0][midC] > target) {
//       continue;
//     }
//     if (matrix[i][midC] === target) return true;

//     if (target < matrix[i][midC] && target > matrix[i - 1][midC]) {
//       midR = i;
//     }
//   }

//   if (midR === null) {
//     const newMatrix =
//       matrix[0][midC] > target
//         ? subMatrix(
//             { startR: 0, endR: matrix.length - 1 },
//             { startC: 0, endC: midC },
//             matrix
//           )
//         : subMatrix(
//             { startR: 0, endR: matrix.length - 1 },
//             { startC: midC + 1, endC: matrix[0].length },
//             matrix
//           );
//     return searchMatrix(newMatrix, target);
//   } else {
//     const leftBottom = subMatrix(
//       { startR: midR, endR: matrix.length - 1 },
//       { startC: 0, endC: midC },
//       matrix
//     );
//     const topRight = subMatrix(
//       { startR: 0, endR: midR },
//       { startC: midC + 1, endC: matrix[midR].length },
//       matrix
//     );

//     return searchMatrix(leftBottom, target) || searchMatrix(topRight, target);
//   }
// }

// function subMatrix(
//   rows: { startR: number; endR: number },
//   cols: { startC: number; endC: number },
//   original: number[][]
// ) {
//   const result: number[][] = [];
//   const { startR, endR } = rows;
//   const { startC, endC } = cols;

//   for (let i = startR; i <= endR; i += 1) {
//     const newRow = original[i].slice(startC, endC);
//     result.push(newRow);
//   }

//   return result;
// }

function searchMatrix(matrix: number[][], target: number) {
}

// const inputMatrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

const inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// const inputMatrix = [[-5]];

// const inputMatrix = [
//   [4, 5],
//   [9, 10],
//   [14, 15],
//   [19, 20],
//   [24, 25],
// ];

// console.log(
//   subMatrix(
//     {
//       startR: 4,
//       endR: 4,
//     },
//     { startC: 0, endC: 2 },
//     inputMatrix
//   )
// );

console.log(searchMatrix(inputMatrix, 19));
