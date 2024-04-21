class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number | null,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function goodNodesIter(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: TreeNode[] = [root];
  const max: (number | null)[] = [root.val];
  let count = 1;

  while (stack.length > 0) {
    const curr = stack.pop();
    const currMax = max.pop() as number;
    if (curr?.left) {
      const left = curr?.left;
      if (Number(left.val) >= currMax) {
        count += 1;
        max.unshift(left.val);
      } else {
        max.unshift(currMax);
      }
      stack.unshift(left);
    }
    if (curr?.right) {
      const right = curr?.right;
      if (Number(right.val) >= currMax) {
        count += 1;
        max.unshift(right.val);
      } else {
        max.unshift(currMax);
      }
      stack.unshift(right);
    }
  }

  return count;
}

function goodNodesRecur(root: TreeNode | null, max: number = 0): number {
  if (!root) return 0;

  let result = Number(root.val) >= max ? 1 : 0;

  result += goodNodesRecur(root.left, Math.max(max, Number(root.val)));
  result += goodNodesRecur(root.right, Math.max(max, Number(root.val)));
  return result;
}

function buildTree(nums: (number | null)[]) {
  if (nums.length === 0) {
    return null;
  }
  let root = new TreeNode(nums[0]);
  let q = [root];
  let i = 0;
  while (i < nums.length) {
    let curr = q.shift() as TreeNode;
    if (i < nums.length) {
      i++;
      if (nums[i]) {
        curr.left = new TreeNode(nums[i]);
        q.push(curr.left);
      }
    }
    if (i < nums.length) {
      i++;
      if (nums[i]) {
        curr.right = new TreeNode(nums[i]);
        q.push(curr.right);
      }
    }
  }
  return root;
}

// const input = [3, 2, 5, 3, 4, 8, 1, 6, null, null, null, 7, null, 13, 9];
const input = [3, 1, 4, 3, null, 1, 5];
// const input = [2, null, 4, 10, 8, null, null, 4];

// console.log(JSON.stringify(buildTreeFromArray(input)));
const tree = buildTree(input);
console.log(JSON.stringify(tree));

// const t0 = performance.now();
// goodNodesIter(tree);
// const t1 = performance.now();
// console.log(`iteration ${t1 - t0} milliseconds.`);

// const t2 = performance.now();
// goodNodesRecur(tree);
// const t3 = performance.now();
// console.log(`recursion ${t3 - t2} milliseconds.`);
