function countBits(n: number): number[] {
    let count = 0;
    const result = [];

    for (let i = 0; i <= n; ++i) {
        let val = i;
        while (val > 0) {
            if (val % 2 === 1) {
                count += 1;
            }
            val = Math.floor(val / 2);
        }
        result.push(count);
        count = 0;
    }

    return result;
};

console.log(countBits(2))
console.log(countBits(5))
