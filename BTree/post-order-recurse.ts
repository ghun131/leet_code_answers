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

// Traverse every node and print its value by order
function postorderTraversal(
  root: TreeNode | null,
  result: number[] = []
): number[] {
  if (!root) return result;

  root.left && postorderTraversal(root.left, result);
  root.right && postorderTraversal(root.right, result);

  root?.val !== null && result.push(root.val);

  return result;
}

// const input = [3, 2, 5, 3, 4, 8, 1, 6, null, null, null, 7, null, 13, 9];
// const input = [3, 1, 4, 3, null, 1, 5];
const input = [1, 2, 3, 4, 5, 6, null];
// const input = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
// const input = [2, null, 4, 10, 8, null, null, 4];

const tree = buildTree(input);
// console.log(JSON.stringify(tree));

console.log(postorderTraversal(tree));
