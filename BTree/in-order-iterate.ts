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

// function inorderTraversal(root: TreeNode | null): number[] {
//   const stack: TreeNode[] = [];
//   const result: number[] = [];
//   let curr: TreeNode | null = root;

//   while (curr !== null || stack.length > 0) {
//     // Go left till the end, push every node into stack
//     while (curr !== null) {
//       stack.push(curr);
//       curr = curr?.left;
//     }
//     curr = stack.pop() as TreeNode;
//     curr?.val && result.push(curr?.val);

//     // switch to the right side
//     curr = curr.right;
//   }

//   return result;
// }

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  const result: number[] = [];

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop() as TreeNode;
      curr.val !== null && result.push(curr.val);
      curr = curr?.right;
    }
  }

  return result;
}

// const input = [3, 2, 5, 3, 4, 8, 1, 6, null, null, null, 7, null, 13, 9];
// const input = [2, 1, 4, 3, null, 1, 5];
// const input = [1, 2, 2, 3, 4, 4, 3];
// const input = [1, null, 0, 3];
// const input = [2, null, 4, 10, 8, null, null, 4];

// const tree = buildTree(input);
const tree0 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 33,
    left: {
      val: 25,
      left: {
        val: 11,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 12,
          left: null,
          right: {
            val: 13,
            left: null,
            right: null,
          },
        },
      },
      right: null,
    },
    right: {
      val: 40,
      left: {
        val: 34,
        left: null,
        right: {
          val: 36,
          left: null,
          right: null,
        },
      },
      right: null,
    },
  },
};

// console.log(inorderTraversal(tree));
console.log(inorderTraversal(tree0, []));
