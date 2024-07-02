class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const queue = [root];

  let level = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const curr = queue.shift();

      if (curr?.left) queue.push(curr.left);
      if (curr?.right) queue.push(curr.right);
    }
    level += 1;
  }

  return level;
}

// function maxDepth(root: TreeNode | null): number {
//   if (root === null) {
//     return 0;
//   }

//   const leftHeight = maxDepth(root?.left);
//   const rightHeight = maxDepth(root?.right);

//   return 1 + Math.max(leftHeight, rightHeight);
// }

const tree1 = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

const tree2 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

console.log(maxDepth(tree1));
console.log(maxDepth(tree2));
