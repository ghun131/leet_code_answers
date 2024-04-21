// function mySqrt(x: number): number {
//   if (x === 0 || x === 1) return x;

//   for (let i = 0; i <= Math.floor(x / 2) + 1; i++) {
//     if (i * i === x) return i;
//     if (i * i > x) return i - 1;
//   }
// }

// function mySqrt(x: number): number {
//   let out = x;

//   while (out * out > x) {
//     out = ((out + x / out) / 2) | 0;
//   }

//   return out;
// }

function mySqrt(x: number): number {
  if (x === 0) return 0;

  let left = 1;
  let right = x;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
}

console.log(mySqrt(2));
console.log(mySqrt(8));
