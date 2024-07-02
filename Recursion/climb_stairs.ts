// function climbStairs(n: number): number {
//   const memo = new Array(n).fill(0);

//   function climbStair(i: number, n: number): number {
//     if (memo[i] > 0) return memo[i];
//     if (i === n) return 1;

//     if (i > n) return 0;

//     memo[i] = climbStair(i + 1, n) + climbStair(i + 2, n);

//     return memo[i]
//   }

//   return climbStair(0, n);
// }

function climbStairs(n: number): number {
  let first = 1;
  let second = 2;
  let result = 0;

  if (n === 1) return first;

  if (n === 2) return second;

  for (let i = 3; i <= n; i += 1) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
}

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
