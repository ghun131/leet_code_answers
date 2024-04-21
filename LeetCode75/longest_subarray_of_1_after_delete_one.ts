function longestSubarray(nums: number[]): number {
  let right = 0;
  let left = 0;
  let del = 1;

  while (right < nums.length) {
    if (nums[right] === 0) del--;
    if (del < 0) {
      if (nums[left] === 0) del++;
      left++;
    }

    right++;
  }

  return right - left - 1;
}

console.log(longestSubarray([1, 1, 0, 1])); // 3
// console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // 5
// console.log(longestSubarray([1, 1, 1])); // 2
