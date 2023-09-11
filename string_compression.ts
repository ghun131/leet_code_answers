function compress(chars: string[]): number {
    let i = 0;
    let j = 0;

    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];

        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }

        chars[i] = curr;
        i++;
        if (count > 1) {
            for (const item of count.toString()) {
                chars[i] = item;
                i++;
            }
        }
    }

    return i;
};

// console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
