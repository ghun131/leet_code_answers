//function longestSubarray(nums: number[]): number {
//    let right = 0;
//    let left = 0;
//    let flip = 1;
//
//    for (;right < nums.length; right++) {
//        if (nums[right] == 0) flip--;
//
//        if (flip < 0) {
//            if (nums[left] === 0) flip++;
//            left ++;
//        }
//    }
//
//    return right - left - 1;
//
//};

function longestSubarray(nums: number[]): number {
    let right = 0;
    let left = 0;
    let zeros = 0;

    let max = 0;

    for (; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;

        while (zeros > 1) {
            if (nums[left] === 0) zeros--;
            left ++;
        }

        max = Math.max(right - left , max);
    }

    return max
}
console.log(longestSubarray([1,1,0,1])); // 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // 5
console.log(longestSubarray([1,1,1])); // 2
