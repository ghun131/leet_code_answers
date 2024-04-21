// This requires the same intuition that climbStairs(n) = climbStairs(n - 1) + climbStairs(n - 2);
function climbStairs(n: number): number {
  let a = 1;
  let b = 1;
  while (n--) {
    //   a = b;
    //   b = a + b;
    b += a;
    a = b - a;
    // a = (b += a) - a;
    console.log('a', a);
    console.log('b', b);
    
  }
  return a;
}

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));

climbStairs(3)