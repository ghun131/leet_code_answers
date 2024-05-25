// class MinStack {
//     stack: [number, number][];
//     constructor() {
//         this.stack = [];
//     }

//     push(val: number): void {
//         const lastIdx = this.stack.length - 1;
//         const last = lastIdx === -1 ? null : this.stack[lastIdx][1];
//         if (typeof last === 'number' && last < val) {
//             this.stack.push([val, last])
//         } else {
//             this.stack.push([val, val]);
//         }

//     }

//     pop(): void {
//         this.stack.pop();
//     }

//     top(): number {
//         const lastIdx = this.stack.length - 1;
//         return this.stack[lastIdx][0];
//     }

//     getMin(): number {
//         console.log(this.stack);
//         const lastIdx = this.stack.length - 1;
//         return this.stack[lastIdx][1];

//     }
// }

class MinStack {
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        const min = this.minStack[this.minStack.length - 1];
        this.stack.push(val);
        this.minStack.push(this.minStack.length === 0 || val < min ? val : min);
    }

    pop(): void {
        this.minStack.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

// const methods = ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"];

// const values = [[],[2],[0],[3],[0],[],[],[],[],[],[],[]];
const methods = ["MinStack","push","push","push","getMin","pop","top","getMin"]
const values = [[],[-2],[0],[-3],[],[],[],[]];
// const methods = ["MinStack","push","push","push","getMin","top","pop","getMin"];
// const values = [[],[-2],[0],[-1],[],[],[],[]];


const minStack = new MinStack();
for (let i = 0; i < methods.length; i+= 1) {
    const method = methods[i];
    const value = values[i][0];

    if (i > 0) {
        const result = minStack[method](value);
        console.log(`method: ${method}, value: ${typeof value === 'number' ? value : ''}, result: ${typeof result === 'number' ? result : ''}`)
    }
}