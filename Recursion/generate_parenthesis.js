function generateParenthesis(n) {
    const answers = [];

    function backtrack(str = '', left, right) {
        if (str.length === 2 * n) {
            answers.push(str);
            return;
        }

        if (left > 0) {
            backtrack(str + '(', left - 1, right);
        }

        if (right > 0 && left < right) {
            backtrack(str + ')', left, right - 1);
        }
    }

    backtrack('', n, n);

    return answers;
}

// function generateParenthesis(n) {
//   const answers = [];

//   function backtrack(str = "", left, right) {
//     if (str.length === 2 * n) {
//       answers.push(str);
//       return;
//     }

//     if (left < n) {
//       str += "(";
//       backtrack(str, left + 1, right);
//       str = str.slice(0, -1);
//     }

//     if (left > right) {
//       str += ")";
//       backtrack(str, left, right + 1);
//       str = str.slice(0, -1);
//     }
//   }

//   backtrack("", 0, 0);

//   return answers;
// }

console.log(generateParenthesis(2));
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(4));
