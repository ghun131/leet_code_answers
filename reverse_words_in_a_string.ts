// function reverseWords(s: string): string {
//     const words = s.split(' ');
//     const result = []
//
//     for (const word of words) {
//         if (word === '') continue;
//         result.unshift(noSpace)
//     }
//
//     return result.join(' ');
// };

function reverseWords(s: string): string {
    const words = s.split(' ');
    s = '';

    for (let i = words.length-1; i >= 0; i--) {
        if (words[i] != '' && words[i] != ' ') s += words[i] + ' '
    }

    return s.trim();
}

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
