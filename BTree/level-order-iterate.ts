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
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  let queue: TreeNode[] = [root];
  let level: number = 0;

  while (queue.length > 0) {
    result.push([]);

    const size: number = queue.length;
    for (let i = 0; i < size; i++) {
      const node: TreeNode | undefined = queue.pop();

      if (node && node.val !== undefined) result[level].push(node.val);

      if (node?.left) queue.unshift(node.left);
      if (node?.right) queue.unshift(node.right);
    }

    level++;
  }

  return result;
}
// function levelOrder(root: TreeNode | null): number[][] {
//   let levels: number[][] = [];
//   if (!root) return levels;
//   const queue: TreeNode[] = [root];
//   let level: number = 0;
//   while (queue.length) {
//     levels.push([]);
//     const size: number = queue.length;
//     for (let i = 0; i < size; i++) {
//       let node: TreeNode | undefined = queue.shift();
//       console.log('size', size)

//       if (node) levels[level].push(node.val);

//       if (node?.left) queue.push(node.left);
//       if (node?.right) queue.push(node.right);
//     }
//     level++;
//   }
//   return levels;
// }
const input = [3, 2, 5, 3, 4, 8, 1, 6, null, null, null, 7, null, 13, 9];
// const input = [3, 1, 4, 3, null, 1, 5];
// const input = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
// const input = [1, null, 2, 3];
// const input = [2, 1, 3, null, 4];

// const input = [3, 1, 2];
// const input = [2, null, 4, 10, 8, null, null, 4];
// const input = [3, 9, 20, null, null, 15, 7];

const tree = buildTree(input);
// console.log(JSON.stringify(tree));

console.log(levelOrder(tree));
