function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];

    if (curr > 0 || stack.length === 0) {
      stack.push(curr);
    } else {
    while (
        stack.length > 0 &&
        last(stack) > 0 &&
        last(stack) < Math.abs(curr)
    ) {
        stack.pop();
    }

      if (stack.length > 0 && last(stack) === Math.abs(curr)) {
        stack.pop();
      } else {
        if (stack.length === 0 || last(stack) < 0) {
          stack.push(curr);
        }
      }
    }
  }

  return stack;
}

//console.log(asteroidCollision([5, 10, -5])); // [5, 10]
//console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
//console.log(asteroidCollision([-2, -1, 1, 2])); // [-2, -1, 1, 2]
//console.log(asteroidCollision([-2, -2, 1, -2])); // [-2, -2, -2]
//console.log(asteroidCollision([8, 9, 6, -7, -9, 12, 50, -34]));
