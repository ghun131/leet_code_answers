function isPowerOfThree(n: number): boolean {
  return n > 0 && Math.pow(3, 19) % n === 0;
}

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(-1));
