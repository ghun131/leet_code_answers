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

function generateBinaryTree(nums: (number | null)[]): TreeNode | null {
  if (nums.length === 0 || nums[0] === null) {
    return null;
  }

  const root = new TreeNode(nums[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < nums.length) {
    const currentNode = queue.shift()!;

    // Left child
    if (i < nums.length) {
      if (nums[i] !== null) {
        currentNode.left = new TreeNode(nums[i]!);
        queue.push(currentNode.left);
      }
      i++;
    }

    // Right child
    if (i < nums.length) {
      if (nums[i] !== null) {
        currentNode.right = new TreeNode(nums[i]!);
        queue.push(currentNode.right);
      }
      i++;
    }
  }

  return root;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function isSame(p?: TreeNode | null, q?: TreeNode | null): boolean {
    if (!p && !q) return true;

    if (!p || !q) return false;

    return p?.val === q?.val;
  }

  const queue: [TreeNode | null | undefined, TreeNode | null | undefined][] = [
    [p, q],
  ];

  while (queue.length > 0) {
    const [pFirst, qFirst] = queue.shift() as [TreeNode, TreeNode];

    if (!isSame(pFirst, qFirst)) {
      return false;
    }

    if (pFirst && qFirst) {
      queue.push([pFirst?.left, qFirst?.left]);
      queue.push([pFirst?.right, qFirst?.right]);
    }
  }

  return true;
}

const tree1 = generateBinaryTree([1, 2, 3]);
const tree2 = generateBinaryTree([1, 2, 3]);
console.log(isSameTree(tree1, tree2));

const tree3 = generateBinaryTree([1, 2]);
const tree4 = generateBinaryTree([1, null, 2]);
console.log(isSameTree(tree3, tree4));

const tree5 = generateBinaryTree([1,2,1]);
const tree6 = generateBinaryTree([1,1,2]);
console.log(isSameTree(tree5, tree6));
