function totalNQueens(n: number): number {
  return backtrack(0, new Set(), new Set(), new Set(), n);
}

function backtrack(
  row: number,
  dale: Set<number>,
  hill: Set<number>,
  cols: Set<number>,
  size: number
) {
  // console.log(row, dale, hill, cols);
  // console.log("-----");
  if (row === size) return 1;

  let result = 0;

  for (let col = 0; col < size; col += 1) {
    const diag = row - col;
    const antiDiag = row + col;
    console.log(
      JSON.stringify({ col, row, dale: [...dale], hill: [...hill], cols: [...cols] })
    );

    if (cols.has(col) || dale.has(diag) || hill.has(antiDiag)) {
      console.log('skip')
      continue;
    }

    cols.add(col);
    dale.add(diag);
    hill.add(antiDiag);
    console.log(
      JSON.stringify({ row: row + 1, dale: [...dale], hill: [...hill], cols: [...cols] })
    );
    console.log("-----");

    result += backtrack(row + 1, dale, hill, cols, size);

    cols.delete(col);
    dale.delete(diag);
    hill.delete(antiDiag);
  }
  console.log("_________________");

  return result;
}

// console.log(totalNQueens(1));
console.log(totalNQueens(4));
