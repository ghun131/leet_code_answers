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

function allPossibleTree(
  start: number,
  end: number,
  memo: Map<string, Array<TreeNode | null>>
): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];

  if (start > end) {
    result.push(null);

    return result;
  }
  const key = start + "," + end;
  const value = memo.get(key);
  if (value != undefined) {
    return value;
  }

  for (let i = start; i <= end; ++i) {
    const leftSubTree = allPossibleTree(start, i - 1, memo);
    const rightSubTree = allPossibleTree(i + 1, end, memo);

    for (const left of leftSubTree) {
      for (const right of rightSubTree) {
        const root = new TreeNode(i, left, right);
        result.push(root);
      }
    }
  }

  memo.set(key, result);
  return result;
}

function generateTrees(n: number): Array<TreeNode | null> {
  const memo = new Map();
  return allPossibleTree(1, n, memo);
}

// const result = generateTrees(3);
const result = generateTrees(4);
console.log(JSON.stringify(result));

// generateTrees(3);
