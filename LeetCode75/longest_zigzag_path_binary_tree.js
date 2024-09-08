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
function longestZigZag(root) {}

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
