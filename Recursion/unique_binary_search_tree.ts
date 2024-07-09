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

function allPossibleBST(
  start: number,
  end: number,
  memo: { [key: string]: Array<TreeNode | null> }
): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = [];
  if (start > end) {
    res.push(null);
    return res;
  }
  const key: string = start + "," + end;
  if (memo[key] != undefined) {
    return memo[key];
  }
  for (let i = start; i <= end; ++i) {
    const leftSubTrees: Array<TreeNode | null> = allPossibleBST(
      start,
      i - 1,
      memo
    );
    const rightSubTrees: Array<TreeNode | null> = allPossibleBST(
      i + 1,
      end,
      memo
    );
    for (const left of leftSubTrees) {
      for (const right of rightSubTrees) {
        let root = new TreeNode(i, left, right);
        res.push(root);
      }
    }
  }
  memo[key] = res;
  return res;
}
function generateTrees(n: number): Array<TreeNode | null> {
  const memo: { [key: string]: Array<TreeNode | null> } = {};
  return allPossibleBST(1, n, memo);
}

