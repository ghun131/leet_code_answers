function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let area = Math.min(height[i], height[j]) * (j - i);

  while (i < j) {
    const currArea = Math.min(height[i], height[j]) * (j - i);
    if (area < currArea) area = currArea;

    height[i] <= height[j] ? i++ : j--;
  }

  return area;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 5, 2, 7, 4]));
