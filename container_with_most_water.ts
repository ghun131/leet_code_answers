// function maxArea(height: number[]): number {
//     let area = 0;
//
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const smaller = Math.min(height[i], height[j]);
//             const curr = smaller * (j - i);
//             area = Math.max(area, curr);
//         }
//     }
//
//     return area;
// };

function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;
    let area = Math.min(height[i], height[j]) * (j - i);

    if (height.length === 2) return area;

    while (i < j) {
        const currArea = Math.min(height[j], height[i]) * (j - i)
        if (currArea > area) {
            area = currArea;
        }
        height[i] <= height[j] ? i++ : j--;
    }


    return area;
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([2,3,10,5,7,8,9])); // 49
