function getRow(rowIndex: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= rowIndex; i++) {
    result.push(getNum(rowIndex, i));
  }

  return result;
}

function getNum(row: number, col: number): number {
  if (row === 0 || col === 0 || row === col) {
    return 1;
  }

  return getNum(row - 1, col - 1) + getNum(row - 1, col);
}

// Write me a Logger class that can do Logger.log("hello")
class Logger {
  static log(message: string) {
    console.log(message);
  }
}


Logger.log("hello");

// console.log(getRow(0));
// console.log(getRow(1));
// console.log(getRow(2));
// console.log(getRow(3));
// console.log(getRow(4));
// console.log(getRow(5));
// console.log(getRow(6));
// console.log(getRow(28));
