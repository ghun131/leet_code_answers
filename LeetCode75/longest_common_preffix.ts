// function isSameChar(strings: string[], char: string, index: number): boolean {
//   if (!char) return false;
//   return strings.every((item) => item[index] === char);
// }

// function longestCommonPrefix(strs: string[]): string {
//   let result = "";
//   for (let i = 0; i <= strs[0].length; i++) {
//     if (isSameChar(strs, strs[0][i], i)) {
//       result += strs[0][i];
//     } else {
//       return result;
//     }
//   }
//   return result;
// }

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  for (let i = 0; i <= strs[0].length; i++) {
    for (let item of strs) {
      if (item[i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix([""]));
