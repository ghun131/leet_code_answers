// function tribonacci(n: number): number {
//     const memo = {};
//     switch(n) {
//         case 0:
//             return 0;
//         case 1:
//             return 1;
//         case 2:
//             return 1;
//         case 3:
//             return 2;
//         default:
//             const prev1 = memo[n-1] || tribonacci(n-1)
//             const prev2 = memo[n-2] || tribonacci(n-2)
//             const prev3 = memo[n-3] || tribonacci(n-3)
//             memo[n-1] = prev1;
//             memo[n-2] = prev2;
//             memo[n-3] = prev3;
//             return prev1 + prev2 + prev3;
//
//     }
// };

// const cached = [0, 1, 1];
// function tribonacci(n: number): number {
//    if (cached[n] === undefined) {
//        cached[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
//    }
//
//    return cached[n]
// };


function tribonacci(n: number): number{
    if (n === 0) return 0;

    let first = 0;
    let second = 1;
    let third = 1;

    for (let i = 3; i <= n; ++i) {
//        const saved = third;
//        third = first + second + third
//        first = second;
//        second = saved;
        [first, second, third] = [second, third, first + second + third];
    }

    return third;
}

console.log(4, tribonacci(4));
console.log(25, tribonacci(25));
console.log(32, tribonacci(32));

