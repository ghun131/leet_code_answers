function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    for (let i = 0; i < k; i++) {
       sum += nums[i]
    }

    let max = sum
    for (let i = 1; i < nums.length; i++) {
        sum = sum - nums[i-1] + nums[i+k-1];

        if (sum > max) max = sum;
    }

    return max / k
};

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
 console.log(findMaxAverage([0,4,0,3,2], 1));

