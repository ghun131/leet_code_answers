// function kthGrammar(n: number, k: number): number {
//   function genStr(n) {
//     if (n === 1) return "0";

//     let result = "0";

//     while (n > 1) {
//       const strArr = result.split("");
//       for (let i = 0; i < strArr.length; i += 1) {
//         if (result[i] === "0") strArr[i] = "01";
//         if (result[i] === "1") strArr[i] = "10";
//       }

//       result = strArr.join("");

//       n -= 1;
//     }

//     return result;
//   }

//   const result = genStr(n);

//   return Number(result?.[k - 1]);
// }

// function kthGrammar(n: number, k: number): number {
//   function genStr(n, val) {
//     if (n === 1) return val;

//     let str = "";

//     for (let i = 0; i < val.length; i += 1) {
//       if (val[i] === "0") str += "01";
//       if (val[i] === "1") str += "10";
//     }

//     return genStr(n - 1, str);
//   }

//   const result = genStr(n, "0");
//   console.log("result:", result);

//   return Number(result?.[k - 1]);
// }

function kthGrammar(n: number, k: number): number {
  if (k === 1) {
    return 0;
  } else if (k % 2 === 0) {
    return Number(!kthGrammar(n - 1, k / 2));
  } else {
    return Number(kthGrammar(n - 1, (k + 1) / 2));
  }
}

// console.log(kthGrammar(1, 1));
// console.log(kthGrammar(2, 1));
// console.log(kthGrammar(2, 2));
// console.log(kthGrammar(3, 1));
// console.log(kthGrammar(3, 2));
// console.log(kthGrammar(3, 3));
// console.log(kthGrammar(4, 5));
// console.log(kthGrammar(5, 9));
console.log(kthGrammar(6, 9));
// console.log(kthGrammar(30, 434991989));
