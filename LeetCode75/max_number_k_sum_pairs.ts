// function maxOperations(nums: number[], k: number): number {
//     nums = nums.sort((a,b) => a - b);
//     let i = 0;
//     let j = nums.length - 1;
//     let count = 0;
//
//     while (i < j) {
//         const sum = nums[i] + nums[j]
//         if (sum === k) {
//             count++;
//             i++;
//             j--;
//         }
//         else if (sum > k) {
//             j--;
//         } else {
//             i++;
//         }
//     }
//
//     return count;
// };

function maxOperations(nums: number[], k: number): number {
    const map = new Map<number, number>();
    let count = 0;

    for (const num of nums) {
        const tar = k - num;
        const tarCount = map.get(tar);
        if (!tarCount) {
            const curr = map.get(num) || 0;
            map.set(num, curr + 1);
        } else {
            count++;
            map.set(tar, tarCount - 1);
        }
    }
    return count;
}
console.log(maxOperations([1,2,3,4], 5));
console.log(maxOperations([3,1,3,4,3], 6));
console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2));
