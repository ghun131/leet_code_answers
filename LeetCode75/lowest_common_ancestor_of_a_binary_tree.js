/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// function lowestCommonAncestor(root, p, q) {
//   let result = null;

//   function dfs(currNode) {
//     if (!currNode) return 0;

//     const left = dfs(currNode.left);
//     const right = dfs(currNode.right);

//     const mid = currNode.val === p.val || currNode.val === q.val ? 1 : 0;

//     if (mid + left + right >= 2) {
//       result = currNode;
//     }
//     console.log("currNode", currNode.val);

//     return mid || left || right ? 1 : 0;
//   }

//   dfs(root);

//   return result;
// }

function lowestCommonAncestor(root, p, q) {
  const stack = [root];

  const parents = new Map();

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr.left) {
      parents.set(curr.left, curr);
      stack.push(curr.left);
    }
    if (curr.right) {
      parents.set(curr.right, curr);
      stack.push(curr.right);
    }
  }

  const ancestors = new Set();

  while (p) {
    ancestors.add(p);
    p = parents.get(p);
  }

  while (!ancestors.has(q)) {
    q = parents.get(q);
  }

  return q;
}

const tree = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
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

// console.log(lowestCommonAncestor(tree, tree.left, tree.right)); // p = 5, q = 1
console.log(lowestCommonAncestor(tree, tree.left, tree.left.right.right)); // p = 5, q = 4
// console.log(lowestCommonAncestor(tree1, { val: 1 }, { val: 2 }));
// console.log(lowestCommonAncestor(tree2, { val: 4 }, { val: 1 }));
