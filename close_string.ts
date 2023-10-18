function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const hash1 = {}
    const hash2 = {}
    for (let i = 0; i < word1.length; i++) {
        const char1 = word1[i];
        const char2 = word2[i];

        hash1[char1] ? hash1[char1] += 1 : hash1[char1] = 1;
        hash2[char2] ? hash2[char2] += 1 : hash2[char2] = 1;
    }

    let occr1 = [];
    let occr2 = [];
    for (let k in hash1) {
        occr1.push(hash1[k]);
        occr2.push(hash2[k]);
    }

    occr1 = occr1.sort((a, b) => a - b);
    occr2 = occr2.sort((a, b) => a - b);

    if (occr1.join('') !== occr2.join('')) return false;

    return true;
};


console.log(closeStrings('abcde', 'aecdb'));
console.log(closeStrings('aacabb', 'bbcbaa'));
console.log(closeStrings('cabbac', 'abbccc'));
console.log(closeStrings('a', 'aa'));
