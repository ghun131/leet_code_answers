function orangesRotting(grid: number[][]): number {
  const queue: [number, number][] = [];
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let freshOrange = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 2) {
        queue.unshift([i, j]);
      } else if (grid[i][j] === 1) {
        freshOrange++;
      }
    }
  }

  queue.unshift([-1, -1]);

  const dimentions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let time = -1;

  while (queue.length > 0) {
    const curr = queue.pop() as [number, number];

    if (curr[0] < 0) {
      time++;
      if (queue.length > 0) {
        queue.unshift([-1, -1]);
      }
    } else {
      for (const r of dimentions) {
        const neighborR = curr[0] + r[0];
        const neighborC = curr[1] + r[1];

        if (
          neighborR >= 0 &&
          neighborR < ROWS &&
          neighborC >= 0 &&
          neighborC < COLS
        ) {
          if (grid[neighborR][neighborC] === 1) {
            grid[neighborR][neighborC] = 2;
            queue.unshift([neighborR, neighborC]);
            freshOrange--;
          }
        }
      }
    }
  }

  return freshOrange === 0 ? time : -1;
}

function orangesRotting(grid: number[][]): number {
  const queue: [number, number][] = [];
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let freshOrange = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 2) {
        queue.unshift([i, j]);
      } else if (grid[i][j] === 1) {
        freshOrange++;
      }
    }
  }

  queue.unshift([-1, -1]);

  const dimentions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let time = -1;

  while (queue.length > 0) {
    const [row, col] = queue.pop() as [number, number];

    if (row < 0) {
      time++;
      if (queue.length > 0) {
        queue.unshift([-1, -1]);
      }
    } else {
      for (const [dx, dy] of dimentions) {
        const neighborR = row + dx;
        const neighborC = col + dy;

        if (
          neighborR >= 0 &&
          neighborR < ROWS &&
          neighborC >= 0 &&
          neighborC < COLS
        ) {
          if (grid[neighborR][neighborC] === 1) {
            grid[neighborR][neighborC] = 2;
            queue.unshift([neighborR, neighborC]);
            freshOrange--;
          }
        }
      }
    }
  }

  return freshOrange === 0 ? time : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
