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

function allLeaves(root: TreeNode | null): number[] {
    if (!root) return [];

    let result = [];
    let stack = [root];

    while (stack.length) {
        const curr = stack.pop();

        if (!curr.left && !curr.right) result.push(curr.val);

        if (curr?.left) stack.push(curr.left);
        if (curr?.right) stack.push(curr.right);
    }

    return result;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // collect all the leaves
    const leaves1 = allLeaves(root1);
    const leaves2 = allLeaves(root2);

    // compare the result
    return sameArray(leaves1, leaves2);
};

function sameArray(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !==  arr2[i]) {
            return false;
        }
    }
    return true;
}

const example1a = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                right: null,
                left: null,
            },
            right: {
                val: 4,
                right: null,
                left: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}

const example1b = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            right: null,
            left: null
        }
    },
    right: {
        val: 1,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
}

const example2a = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
}

const example2b = {
    val: 1,
    left: {
        val: 3,
        left: null,
        right: null,
    },
    right: {
        val: 2,
        left: null,
        right: null,
    }
}

console.log('test 1', leafSimilar(example1a, example1b))
console.log('test 2', leafSimilar(example2a, example2b))
