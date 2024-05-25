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

function pathSum(root: TreeNode | null, target: number): number {
  let numOfPaths: number = 0;

  function dfs(node: TreeNode | null, target: number): void {
    if (node === null) {
      return;
    }
    test(node, target);
    dfs(node.left, target);
    dfs(node.right, target);
  }

  function test(node: TreeNode | null, target: number): void {
    if (node === null) {
      return;
    }
    if (node.val === target) {
      numOfPaths++;
    }
    test(node.left, target - node.val);
    test(node.right, target - node.val);
  }

  dfs(root, target);
  return numOfPaths;
}
function buildTree(nums: (number | null)[]): TreeNode | null {
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

// const tree = buildTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
// const target = 8;

// const tree = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
// const target = 22;

const tree = buildTree([1, 5, 7, 8, 3, 9, 11, 6, 1, 4, 2, 3]);
const target = 11;

const result = pathSum(tree, target);
console.log(result);
