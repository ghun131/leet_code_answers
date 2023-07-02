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

// function maxDepth(root: TreeNode | null): number {
//     if (!root || root.val === undefined) return 0;
//     const stack = [root];
//     let depth = 0;
//
//     while(stack.length > 0) {
//         const nodes = stack.splice(0, stack.length);
//
//         for (let i = 0; i < nodes.length; ++i) {
//             if (nodes[i]?.left) stack.push(nodes[i].left);
//             if (nodes[i]?.right) stack.push(nodes[i].right);
//         }
//
//         depth += 1;
//     }
//
//     return depth;
// };

function maxDepth(root: TreeNode | null): number {


}


const tree1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

const tree2 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null
    }
}

console.log(maxDepth(tree1));
console.log(maxDepth(tree2));
console.log(maxDepth({}));
