// function gcdOfStrings(str1: string, str2: string): string {
//     const iterable = str1 > str2 ? str2 : str1;
//
//     for (let i = iterable.length; i > 0; i--) {
//         const substr = iterable.substring(0, i);
//         if (isDivisor(substr, str1) && isDivisor(substr, str2)) {
//             return substr;
//         }
//     }
//
//     return '';
// };
//
// function isDivisor(input: string, str: string): boolean {
//     let result = ''
//
//     while (result.length < str.length) {
//         result += input;
//     }
//
//     return result === str;
// }

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';
    const gcd = (a: number, b: number) => b === 0 ? a : gcd(b, a % b);

    return str1.substring(0, gcd(str1.length, str2.length));
}

console.log(gcdOfStrings('abcabc', 'abc'));
console.log(gcdOfStrings('ababab', 'ab'));
console.log(gcdOfStrings('leet', 'code'));
