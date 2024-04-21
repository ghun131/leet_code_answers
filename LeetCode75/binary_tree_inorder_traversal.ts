  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

//function inorderTraversal(root: TreeNode | null): number[] {
//    const stack = [] as TreeNode[];
//    const result: number[] = [];
//
//    while(root || stack.length) {
//        if (root) {
//            stack.push(root);
//            root = root.left;
//        } else {
//            root = stack.pop() as TreeNode;
//            result.push(root.val);
//            root = root.right;
//        }
//
//    }
//    return result;
//};

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
