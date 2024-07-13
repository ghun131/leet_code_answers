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

function isValidBST(
  root: TreeNode | null,
  low: number | null = null,
  high: number | null = null
): boolean {
  if (!root) return true;

  if (
    (low !== null && low >= root.val) ||
    (high !== null && high <= root.val)
  ) {
    return false;
  }

  return (
    isValidBST(root.left, low, root.val) &&
    isValidBST(root.right, root.val, high)
  );
}

const tree1 = {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },

  right: {
    val: 15,
    left: {
      val: 10,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 13,
        left: null,
        right: null,
      },
    },
    right: {
      val: 18,
      left: null,
      right: null,
    },
  },
};

console.log(isValidBST(tree1));