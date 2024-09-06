// function combine(n: number, k: number): number[][] {
//   const answer: number[][] = [];
//   function backtrack(curr: number[], firstNum: number) {
//     if (curr.length === k) {
//       answer.push([...curr]);
//       return;
//     }

//     for (let i = firstNum; i < n + 1; i += 1) {
//       curr.push(i);
//       backtrack(curr, i + 1);
//       curr.pop();
//     }
//   }

//   backtrack([], 1);

//   return answer;
// }

function combine(n: number, k: number): number[][] {
  const answers: number[][] = [];
  function backtrack(curr: number[], firstNum: number) {
    if (curr.length === k) {
      answers.push([...curr]);
      return;
    }

    const need = k - curr.length;
    const remain = n - firstNum + 1;
    const available = remain - need;

    for (let i = firstNum; i <= firstNum + available; i += 1) {
      curr.push(i);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }

  backtrack([], 1);

  return answers;
}

console.log(combine(4, 2));
console.log(combine(4, 3));
