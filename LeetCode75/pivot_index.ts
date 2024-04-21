//function pivotIndex(nums: number[]): number {
//    for (let i = 0; i < nums.length; i++) {
//        let leftSum = 0;
//        let rightSum = 0;
//        for (let j = 0; j < i; j++) {
//            leftSum += nums[j];
//        }
//
//        for (let k = i + 1; k < nums.length; k++) {
//            if (nums[k]) rightSum += nums[k];
//        }
//
//        if (leftSum === rightSum) {
//            return i
//        }
//     }
//
//     return -1;
//};

function pivotIndex(nums: number[]): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    let rightSum = sum;
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (nums[i-1]) leftSum += nums[i-1]
        if (leftSum === rightSum) return i
    }
    return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
