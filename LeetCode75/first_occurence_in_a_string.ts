// function strStr(haystack: string, needle: string): number {
//   return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
// }

function strStr(haystack: string, needle: string): number {
  if (needle.length == 0) return 0;
  if (haystack.length == 0) return -1;

  for (let i = 0; ; i++) {
    if (i + needle.length > haystack.length) break;

    for (let j = 0; ; j++) {
      if (j === needle.length) return i;
      if (needle.charAt(j) !== haystack.charAt(i + j)) break;
    }
  }

  return -1;
}

console.log(strStr("leetcode", "leeto"));
