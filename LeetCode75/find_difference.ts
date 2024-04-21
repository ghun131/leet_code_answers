// function findDifference(nums1: number[], nums2: number[]): number[][] {
//     const result: number[][] = [[], []];
//     for (let i = 0; i < nums1.length; i++) {
//         if (!nums2.includes(nums1[i]) && !result[0].includes(nums1[i])) {
//             result[0].push(nums1[i]);
//         }
//     }
//
//     for (let i = 0; i < nums2.length; i++) {
//         if (!nums1.includes(nums2[i]) && !result[1].includes(nums2[i])) {
//             result[1].push(nums2[i]);
//         }
//     }
//
//     return result;
// };

function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (let i = 0; i < nums1.length; i++) {
        set2.delete(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        set1.delete(nums2[i])
    }

    return [[...set1], [...set2]];
}

console.log(findDifference([1,2,3], [2,4,6]));
console.log(findDifference([1,2,3, 3], [1,1,2,2]));
