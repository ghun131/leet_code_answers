class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
 * @return {number}
 */
// function longestZigZag(root) {
//   let longestPath = 0;
//   function dfs(node, toLeft, steps) {
//     if (!node) return;

//     longestPath = Math.max(longestPath, steps);

//     if (toLeft) {
//       dfs(node.left, false, 1);
//       dfs(node.right, true, steps + 1);
//     } else {
//       dfs(node.left, true, steps + 1);
//       dfs(node.right, false, 1);
//     }
//   }

//   dfs(root, true, 0);
//   dfs(root, false, 0);

//   return longestPath;
// }

function longestZigZag(root) {
  let longestPath = 0;

  function dfs(node, left, right) {
    if (!node) return;

    longestPath = Math.max(longestPath, left, right);

    if (node.left !== null) {
      dfs(node.left, right + 1, 0);
    }

    if (node.right !== null) {
      dfs(node.right, 0, left + 1);
    }
  }

  dfs(root, 0, 0);

  return longestPath;
}

const tree1 = {
  val: 1,
  right: {
    val: 1,
    right: {
      val: 1,
      right: {
        val: 1,
        left: null,
        right: null,
      },
      left: {
        val: 1,
        left: null,
        right: null,
      },
    },
    left: {
      val: 1,
      left: null,
      right: null,
    },
  },
  left: null,
};

const tree2 = {
  val: 1,
  right: {
    val: 1,
    left: null,
    right: null,
  },
  left: {
    val: 1,
    left: null,
    right: {
      val: 1,
      left: {
        val: 1,
        right: { val: 1, left: null, right: null },
        left: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

const tree3 = { val: 1, left: null, right: null };

console.log("tree1", longestZigZag(tree1));
console.log("tree2", longestZigZag(tree2));
console.log("tree3", longestZigZag(tree3));
