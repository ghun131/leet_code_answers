const merge = (lList: number[], rList: number[]): number[] => {
  let cursorL = 0;
  let cursorR = 0;
  const arr: number[] = [];

  while (cursorL < lList.length && cursorR < rList.length) {
    if (lList[cursorL] < rList[cursorR]) {
      arr.push(lList[cursorL]);
      cursorL += 1;
    } else {
      arr.push(rList[cursorR]);
      cursorR += 1;
    }
  }

  return arr.concat(lList.slice(cursorL)).concat(rList.slice(cursorR));
};

function sortArray(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }

  const pivot = Math.floor(nums.length / 2);
  const lList = sortArray(nums.slice(0, pivot));
  const rList = sortArray(nums.slice(pivot, nums.length));

  return merge(lList, rList);
}

console.log(sortArray([5, 2, 3, 1]));
// console.log(sortArray([5,1,1,2,0,0]));
