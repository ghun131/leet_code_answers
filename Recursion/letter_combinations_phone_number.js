/**
 * @param {string} digits
 * @return {string[]}
 */
const letterMap = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

function letterCombinations(digits) {
  const answers = [];
  if (digits === "") return answers;

  function backtrack(str, index) {
    if (str.length === digits.length) {
      answers.push(str);
      return;
    }

    const letters = letterMap.get(digits[index]);
    for (const char of letters) {
      str += char;
      backtrack(str, index + 1);
      str = str.slice(0, -1);
    }
  }

  backtrack("", 0);

  return answers;
}

console.log(letterCombinations("23"));
console.log(letterCombinations("368"));
