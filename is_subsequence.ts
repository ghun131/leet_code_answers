function isSubsequence(s: string, t: string): boolean {
    let pos = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[pos]) {
            pos += 1;
        }
    }

    return pos === s.length;
};

