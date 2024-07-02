// function productExceptSelf(nums: number[]): number[] {
//     const output: number[] = [];
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

  let logLeft = "";
  let logRight = "";

  while (r >= 0) {
    logLeft += `l: ${l}, nums[l]: ${nums[l]}, leftMul: ${leftMul}, output: ${output} \n`;
    leftMul *= nums[l];
    output[l] *= leftMul;
    l++;

    logRight += `r: ${r}, nums[r]: ${nums[r]}, rightMul: ${rightMul}, output: ${output} \n`;
    rightMul *= nums[r];
    output[r] *= rightMul;
    r--;
  }

  console.log(logLeft);
  console.log(logRight);

  return output;
}

// console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([-1, 1,0,-3,3]))
// console.log(productExceptSelf([0,0]))
// console.log(productExceptSelf([4,3,2,1,2]))
console.log(productExceptSelf([4, 5, 1, 8, 2, 10, 6]));
