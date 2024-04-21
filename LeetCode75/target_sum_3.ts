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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  const visitedNodes = [false];
  const stack = [root];
  //   let curr = root;

  while (stack.length > 0) {
    let curr = stack.pop();
    const visited = visitedNodes.pop();
    while (curr?.left) {
      if (!visited) {
        stack.unshift(curr.left);
        visitedNodes.unshift(true);
        curr = curr.left;
      }
    }

    while (curr?.right) {
      if (!visited) {
        stack.unshift(curr.right);
        visitedNodes.unshift(true);
        curr = curr.right;
      }
    }
  }
}

// const input = buildTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
// const target = 8;
const input = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
const target = 22;
// const input = buildTree([1, 5, 7, 8, 3, 9, 11, 6, null, 1, 4, null, 2, null, 3]);
// const target = 11;

const result = pathSum(input, target);

// console.log(result);
