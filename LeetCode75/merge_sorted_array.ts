/**
    Do not return anything, modify nums1 in-place instead.
    */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
// for (let i = 0; i < n; i++) {
//  nums1[m + i] = nums2[i]
// }
// nums1 = nums1.sort((a, b) => a - b);
// console.log(nums1)
//};


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0){
        if (nums1[i] < nums2[j]){
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }
        k--
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    while (i >= 0) {
        nums1[k] = nums1[i];
        i--;
        k--;
    }
    console.log(nums1);
}


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// merge([1], 1, [], 0)
