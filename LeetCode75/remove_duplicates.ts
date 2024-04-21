function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// function removeDuplicates(nums: number[]): number {
//   const unique = new Set(nums);
//   const rest = Array(nums.length - unique.size).fill(nums.slice(-1));
//   nums = [...unique].concat(rest);
//   return unique.size;
// }

console.log(removeDuplicates([1, 1, 2]));
