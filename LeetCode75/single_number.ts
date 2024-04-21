// function singleNumber(nums: number[]): number {
//     const numSet = new Set();
//
//     for (let i = 0; i < nums.length; i++) {
//         if (!numSet.has(nums[i])) {
//             numSet.add(nums[i])
//         } else {
//             numSet.delete(nums[i]);
//         }
//     }
//     return numSet.values().next().value;
// }

function singleNumber(nums: number[]): number{
    let uniq = 0;

    for (let i = 0; i< nums.length; i++) {
        uniq = uniq ^ nums[i]
    }

    return uniq
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
 console.log(singleNumber([1]))
