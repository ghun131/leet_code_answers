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

// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;
//   let maxDepth = 1;

//   function traverse(root: TreeNode | null, depth: number) {
//     if (!root) return depth;

//     if (root.left) traverse(root.left, depth + 1);
//     if (root.right) traverse(root.right, depth + 1);
//     maxDepth = Math.max(maxDepth, depth);
//   }

//   traverse(root, maxDepth);

//   return maxDepth;
// }

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (root.left === null && root.right === null) return 1;

  const queue: (TreeNode | null)[] = [root];
  let level = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      root = queue.pop();

      if (root?.left) queue.unshift(root.left);
      if (root?.right) queue.unshift(root.right);
    }
    level++;
  }

  return level;
}

const tree = buildTree([3, 9, 20, null, null, 15, 7]);
// const tree = buildTree([1, 2]);

console.log(maxDepth(tree));
