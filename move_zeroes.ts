/**
    Do not return anything, modify nums in-place instead.
    */
function moveZeroes(nums: number[]): void {
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos += 1;
        }
    }

    for (let j = pos; j < nums.length; j++) {
        nums[j] = 0
    }
};

moveZeroes([1, 3, 0, 2, 0, 7, 0, 9]);
// moveZeroes([2,1]);
