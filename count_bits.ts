// function countBits(n: number): number[] {
//     let result = Array(n+1).fill(0);
//     let offset = 1;
//
//     for (let i = 1; i < n + 1; ++i) {
//         if (offset * 2 === i) {
//             offset = i
//         }
//
//         result[i] = 1 + result[i - offset];
//     }
//
//     return result;
// }

function countBits(n: number): number[] {
    let count = 0;
    const result = Array(n).fill(0);

    for (let i = 0; i <= n; ++i) {
        let val = i;

        while(val > 0) {
            if (val % 2 === 1) count += 1;
            val = Math.floor(val / 2);
        }

        result[i] = count;
        count = 0;
    }
    return result;
}

console.log(countBits(2));
console.log(countBits(5));
