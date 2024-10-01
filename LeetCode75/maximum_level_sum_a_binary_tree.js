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
function maxLevelSum(root) {
  if (root === null) return 0;
  const sums = [];

  function dfs(root, level) {
    if (root && root.val != null) {
      sums[level] !== undefined
        ? (sums[level] += root.val)
        : (sums[level] = root.val);
    }
    if (root && root.left) {
      dfs(root.left, level + 1);
    }
    if (root && root.right) {
      dfs(root.right, level + 1);
    }
  }

  dfs(root, 0);

  let result = 1;
  let max = sums[0];
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] > max) {
      max = sums[i];
      result = i + 1;
    }
  }

  return result;
}
// function maxLevelSum(root) {
//   if (root === null) return 0;

//   const queue = [root];
//   let level = 0;
//   let result = level;
//   let maxTotal = - Infinity;

//   while (queue.length > 0) {
//     const size = queue.length;
//     let total = 0;
//     level++;

//     for (let i = 0; i < size; i++) {
//       const curr = queue.shift();
//       if (curr) {
//         total += curr.val;
//         curr.left && queue.push(curr.left);
//         curr.right && queue.push(curr.right);
//       }
//     }

//     if (total > maxTotal) {
//       maxTotal = total;
//       result = level;
//     }
//   }

//   return result;
// }

const tree0 = {
  val: 1,
  left: {
    val: 7,
    left: {
      val: 7,
    },
    right: {
      val: -8,
    },
  },
  right: {
    val: 0,
  },
};

const tree1 = {
  val: 989,
  left: {
    val: 10250,
    left: {
      val: 98693,
      left: {
        val: -89388,
        left: {
          val: -32127,
        },
      },
    },
    right: {
      val: -89388,
    },
  },
  right: {
    val: 10250,
    right: {
      val: 98693,
      right: {
        val: -89388,
        right: {
          val: -32127,
        },
      },
    },
  },
};

const tree2 = {
  val: -100,
  left: {
    val: -200,
    left: {
      val: -20,
    },
    right: {
      val: -5,
    },
  },
  right: {
    val: -300,
    left: {
      val: -10,
    },
  },
};

const tree3 = {
  val: 1,
  left: {
    val: 1,
    left: {
      val: 7,
    },
    right: {
      val: -8,
    },
  },
  right: {
    val: 0,
    left: {
      val: -7,
    },
    right: {
      val: 9,
    },
  },
};

// console.log(maxLevelSum(tree0));
// console.log(maxLevelSum(tree1));
// console.log(maxLevelSum(tree2));
console.log(maxLevelSum(tree3));
