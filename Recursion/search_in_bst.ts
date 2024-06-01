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

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   let result: TreeNode | null = null;

//   if (root === null) return result;

//   function bfs(haystack: TreeNode, needle: number) {
//     if (haystack.val === needle) {
//       result = haystack;
//     }
//     if (haystack.left === null && haystack.right === null) {
//       return result;
//     }

//     if (haystack.left) bfs(haystack.left, needle);
//     if (haystack.right) bfs(haystack.right, needle);
//   }

//   bfs(root, val);
//   return result;
// }

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // A BST where key in each node is
  // greater than key stored in the left subtree
  // smaller than key stored in the right subtree

  if (root === null || root.val === val) return root;

  return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
}

// const tree = buildTree([4, 2, 7, 1, 3]);
// const val = 2;
const tree = buildTree([62, 2, 93, null, 30, null, null, 15, null, null, null]);
const val = 15;

console.log(JSON.stringify(searchBST(tree, val)));
