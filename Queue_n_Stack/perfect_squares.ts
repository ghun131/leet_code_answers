function numSquares(n: number): number {
  const squares: number[] = [];
  let num = 1;

  while (num * num <= n) {
    squares.push(num * num);
    num += 1;
  }

  let queue: Set<number> = new Set();
  let level = 0;
  queue.add(n);

  while (queue.size > 0) {
    level++;

    const newQueue: Set<number> = new Set();
    for (const num of Array.from(queue)) {
      for (const square of squares) {
        if (num === square) {
          return level;
        } else if (num < square) {
          break;
        } else {
          newQueue.add(num - square);
        }
      }
    }
    queue = newQueue;
  }

  return level;
}

// console.log(numSquares(12));
// console.log(numSquares(13));
// console.log(numSquares(27));
// console.log(numSquares(25));
console.log(numSquares(7168));
// console.log(numSquares(6175));
