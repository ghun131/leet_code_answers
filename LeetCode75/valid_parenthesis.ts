// function isValid(s: string): boolean {
//   const parenthesis = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   const stack: string[] = [];
//   for (let i = 0; i < s.length; i++) {
//     if (Object.keys(parenthesis).includes(s[i])) {
//       stack.push(parenthesis[s[i]]);
//     }

//     else if (s[i] !== stack.pop()) {
//         return false
//     }
//   }

//   return stack.length === 0;
// }

function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (s[i] !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
}
console.log(isValid("()"));
