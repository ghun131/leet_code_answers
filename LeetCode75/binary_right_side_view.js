/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];

  const rightside = [];

  function helper(node, level) {
    if (level === rightside.length) {
      rightside.push(node.val);
    }

    if (node && node.right) helper(node.right, level + 1);
    if (node && node.left) helper(node.left, level + 1);
  }

  helper(root, 0);

  return rightside;
}

// function rightSideView(root) {
//   const stack = [root];
//   const result = [];

//   while (stack.length > 0) {
//     const size = stack.length;

//     for (let i = 0; i < size; i++) {
//       const curr = stack.shift();

//       if (curr && curr.left) stack.push(curr.left);
//       if (curr && curr.right) stack.push(curr.right);

//       if (i === size - 1 && curr) result.push(curr.val);
//     }
//   }

//   return result;
// }

const tree0 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};

const tree1 = {
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
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const tree2 = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

// console.log(rightSideView(tree0));
console.log(rightSideView(tree1));
// console.log(rightSideView(tree2));
