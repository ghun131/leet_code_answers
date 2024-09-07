/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const answers = [];

  function backtrack(curr) {
    if (curr.length === nums.length) {
      answers.push([...curr]);
      return;
    }

    for (const num of nums) {
      if (curr.includes(num)) continue;

      curr.push(num);
      backtrack(curr);
      curr.pop();

    }
  }
  backtrack([]);

  return answers;
}

console.log(permute([1, 2, 3]));
console.log(permute([1, 2, 3, 4]));
