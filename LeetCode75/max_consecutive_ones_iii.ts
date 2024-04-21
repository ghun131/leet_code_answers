function longestOnes(nums: number[], k: number): number {
  let right = 0;
  let left = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;
    if (k < 0) {
      if (nums[left] === 0) k++;
      left++;
    }

    right++;
  }
  console.log("last indices", right, left);
  return right - left;
}

// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
//console.log(longestOnes([0,0,0,1], 4));
console.log(longestOnes([1, 1, 1, 1, 0, 0, 0, 1, 1], 2));
