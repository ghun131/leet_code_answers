function isVowel(s: string) { return "aeiou".includes(s) }

function maxVowels(s: string, k: number): number {
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) count++;
    }

    let max = count;

    if (s.length <= k) return max;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) count++;
        if (isVowel(s[i - k])) count--;

        max = Math.max(max, count);
        if (max === k) return max;
    }

    return max;

};


// console.log(maxVowels("abciiidef", 3));
//console.log(maxVowels("aeiou", 2));
//console.log(maxVowels("leetcode", 3));
console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));
