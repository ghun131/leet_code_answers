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

function postorderTraversal0(root: TreeNode | null): number[] {
  // simple stack, reverse the result
  if (!root) return [];

  const stack = [root];
  const result: number[] = [];

  while (stack.length > 0) {
    const curr = stack.pop() as TreeNode;

    curr.left && stack.push(curr.left);
    curr.right && stack.push(curr.right);

    curr?.val !== null && result.push(curr.val);
  }

  return result.reverse();
}

function postorderTraversal1(root: TreeNode | null): number[] {
  // ONE stack. Pre is previously printed node.
  // Only print a node if right child is null or equal to pre

  const out: number[] = [];
  if (root === null) return out;

  let pre: TreeNode | null = null;
  const stack: TreeNode[] = [];

  while (root !== null || stack.length > 0) {
    if (root !== null) {
      stack.push(root as TreeNode);
      root = root.left;
    } else {
      root = stack[stack.length - 1];

      if (root.right === null || root.right === pre) {
        out.push(root.val as number);
        stack.pop();
        pre = root;
        root = null;
      } else {
        root = root.right;
      }
    }
  }

  return out;
}

function postorderTraversal2(root: TreeNode | null): number[] {
  // TWO stacks.
  const out: number[] = [];
  if (!root) return out;

  const stack = [root];
  const path: TreeNode[] = [];

  while (stack.length > 0) {
    root = stack[stack.length - 1];

    if (path.length > 0 && root === path[path.length - 1]) {
      out.push(root.val as number);
      stack.pop();
      path.pop();
    } else {
      path.push(root);
      if (root.right) stack.push(root.right);
      if (root.left) stack.push(root.left);
    }
  }

  return out;
}

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 8,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
// console.log(JSON.stringify(tree));

// console.log(postorderTraversal0(tree));
// console.log(postorderTraversal1(tree));
// console.log(postorderTraversal2(tree));
console.log(postorderTraversal2(tree1));
