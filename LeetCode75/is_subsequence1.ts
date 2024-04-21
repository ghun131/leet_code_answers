function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  for (; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
  }

  return s.length === j;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
