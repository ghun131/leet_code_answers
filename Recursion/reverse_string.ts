function reverseString0(s: string[]): void {
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    const back = s.length - 1 - i;

    [s[i], s[back]] = [s[back], s[i]];
  }
}

function reverseString1(s: string[]): void {
  if (s.length === 0) return;

  [s[0], s[s.length - 1]] = [s[s.length - 1], s[0]];

  reverseString1(s.slice(1, s.length - 1));
}

function reverseString2(s: string[]): void {
  function helper(start, end, arr) {
    if (start > end) {
      return;
    }

    [arr[end], arr[start]] = [arr[start], arr[end]];

    helper(start + 1, end - 1, arr);
  }

  helper(0, s.length - 1, s);
}

const arr0 = ["h", "e", "l", "l", "o"];
const arr1 = ["h", "e", "l", "l", "o"];
const arr2 = ["h", "e", "l", "l", "o"];
// const arr = ["h", "e", "r", "d"];

const t0 = performance.now();
reverseString0(arr0);
const t1 = performance.now();
const t2 = performance.now();
reverseString1(arr1);
const t3 = performance.now();
const t4 = performance.now();
reverseString2(arr2);
const t5 = performance.now();

console.log(arr0, `Time taken: ${t1 - t0}`);
console.log(arr1, `Time taken: ${t3 - t2}`);
console.log(arr2, `Time taken: ${t5 - t4}`);
