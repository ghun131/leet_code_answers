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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    const stack = [root];

    while (stack.length) {
        const curr = stack.pop();

        if (curr?.val === val) return curr;

        if (curr?.left) stack.push(curr.left);
        if (curr?.right) stack.push(curr.right);
    }

    return null;

};

const tree = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
}

console.log(searchBST(tree, 2))
console.log(searchBST(tree, 5))
