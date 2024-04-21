// function reverseVowels(s: string): string {
//     const vowels = 'aeiouAEIOU';
//     const currVowels:string[] = []
//     let result = '';
//
//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             currVowels.push(s[i]);
//         }
//     }
//
//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             result += currVowels.pop();
//         } else {
//             result += s[i];
//         }
//
//     }
//
//     return result;
// };


function reverseVowels(s: string): string {
    const VOWELS = 'aeiouAEIOU';
    const arr = s.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (VOWELS.includes(arr[i]) && VOWELS.includes(arr[j])) {
            const cur = arr[i];
            arr[i] = arr[j];
            arr[j] = cur;
            i++;
            j--;
        } else if (VOWELS.includes(arr[i])) {
            j--;
        } else {
            i++;
        }
    }
    return arr.join('')
};
console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log(reverseVowels('aA'));
