function removeStars(s: string): string {
    const res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            res.pop();
        } else {
            res.push(s[i]);
        }
    }

    return res.join('');
}

console.log(removeStars('leet**cod*e'));
console.log(removeStars('erase*****'));
