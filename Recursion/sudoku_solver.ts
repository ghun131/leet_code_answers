// This is a HARD question so I will postpone it for now

function getExistingNumbers(board: string[][], cell: [number, number]) {
  const [row, col] = cell;

  const nums = new Set([...board[row].filter((item) => item !== ".")]);

  for (let i = 0; i < board.length; i += 1) {
    if (board[i][col] !== ".") nums.add(board[i][col]);
  }

  //   get all numbers in the 3x3 square
  const rowIdx = Math.floor(cell[0] / 3) * 3;
  const colIdx = Math.floor(cell[1] / 3) * 3;

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      const curRow = rowIdx + j;
      const curCol = colIdx + i;
      const value = board[curRow][curCol];

      if (value !== ".") nums.add(value);
    }
  }

  return nums;
}

function getAnswersForCell(nums: Set<string>) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const result = new Set();

  for (const val of numbers) {
    if (!nums.has(val)) result.add(val);
  }

  return result;
}

function backtrack(board: string[][], cell: [number, number]) {}

function solveSudoku(board: string[][]): void {}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const numbers = getExistingNumbers(board, [0, 2]);
const anwersForCell = getAnswersForCell(numbers);
