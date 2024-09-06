/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */

function treeToDoublyList(root) {
  if (root === null) return null;

  let first = null;
  let last = null;
  let curr = root;

  const stack = [];

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }

    if (stack.length > 0) {
      curr = stack.pop();

      if (!first) {
        first = curr;
      }

      if (last) {
        last.right = curr;
        curr.left = last;
      }

      last = curr;
      curr = curr.right;
    }
  }

  first.left = last;
  last.right = first;

  return first;
}

// function treeToDoublyList(root) {
//   if (root === null) return null;

//   let first = null;
//   let last = null;

//   function helper(node) {
//     if (node) {
//       helper(node.left);

//       if (last) {
//         last.right = node;
//         node.left = last;
//       } else {
//         first = node;
//       }

//       last = node;

//       helper(node.right);
//     }
//   }

//   helper(root);

//   last.right = first;
//   first.left = last;

//   return first;
// }
