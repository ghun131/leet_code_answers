// function getRow(rowIndex: number): number[] {
//   const result: number[] = [];

//   for (let i = 0; i <= rowIndex; i++) {
//     result.push(getNum(rowIndex, i));
//   }

//   return result;
// }

// function getNum(row: number, col: number): number {
//   if (row === 0 || col === 0 || row === col) {
//     return 1;
//   }

//   return getNum(row - 1, col - 1) + getNum(row - 1, col);
// }

function getRow(rowIndex: number): number[] {
  let prev = [1];

  for (let i = 1; i <= rowIndex; i += 1) {
    const curr = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j += 1) {
      curr[j] = prev[j - 1] + prev[j];
    }
    prev = curr;
  }

  return prev;
}

// console.log(getRow(0));
// console.log(getRow(1));
console.log(getRow(2));
// console.log(getRow(3));
// console.log(getRow(4));
// console.log(getRow(5));
// console.log(getRow(6));
// console.log(getRow(28));
