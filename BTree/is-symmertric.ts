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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  if (!root.right && !root.left) return true;

  const values: number[] = [];

  function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    root.left && inorderTraversal(root?.left);

    root.val !== null && values.push(root.val);

    root.right && inorderTraversal(root?.right);
  }
  inorderTraversal(root);

  const mid = Math.floor(values.length / 2);
  let result = root.val === values[mid];

  for (let i = 0; i < values.length; i++) {
    if (i !== mid) {
      result && values[i] === values[values.length - i];
    }
  }

  return result;
}

const tree = buildTree([1, 2, 2, 3, 4, 4, 3]);

console.log(isSymmetric(tree));
