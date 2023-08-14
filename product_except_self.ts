// function productExceptSelf(nums: number[]): number[] {
//     const output = [];
//     let leftMult = 1;
//     let rightMult = 1;
//     for (let i=nums.length - 1; i >= 0; i--) {
//         output[i] = rightMult;
//         rightMult *= nums[i];
//     }
//     for (let j=0; j < nums.length; j++) {
//         output[j] *= leftMult;
//         leftMult *= nums[j];
//     }
//     return output;
// };

function productExceptSelf(nums: number[]): number[] {
    const output = Array(nums.length).fill(1);
    let l = 0;
    let r = nums.length - 1;
    let leftMul = 1;
    let rightMul = 1;

    while (r >= 0) {
        output[r] *= rightMul;
        rightMul *= nums[r];
        r--

        output[l] *= leftMul;
        leftMul *= nums[l];
        l++
    }

    return output;
}


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1, 1,0,-3,3]))
console.log(productExceptSelf([0,0]))
console.log(productExceptSelf([4,3,2,1,2]))
