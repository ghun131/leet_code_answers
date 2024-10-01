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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (root && !root.right && !root.left) {
    if (root.val === key) return;
    return root;
  }

  let pre = root;
  function dfs(node) {
    if (node && node.val === key) {
      if (pre.val !== key) {
        pre.left = node.right;
        if (pre.left) pre.left.left = node.left;
      } else {
        node.left.right = node.right;
        node.left.left = node.left;
      }
    }
    pre = node;
    if (node && node.left) {
      dfs(node.left);
    }
    if (node && node.right) {
      dfs(node.right);
    }
  }

  dfs(root);

  return root;
}

const tree0 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
    },
  },
};
const tree1 = {
  val: 0,
};

// console.log(deleteNode(tree0, 3));
// console.log(deleteNode(tree0, 0));
console.log(deleteNode(tree1, 0));
