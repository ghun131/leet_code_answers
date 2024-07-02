// class MyQueue {
//   stack1: number[];
//   stack2: number[];
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   push(x: number): void {
//     if (this.stack1.length === 0 && this.stack2.length === 0) {
//       this.stack2.push(x);
//       return;
//     }

//     while (this.stack2.length > 0) {
//       this.stack1.push(this.stack2.pop() as number);
//     }

//     this.stack2.push(x);

//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop() as number);
//     }

//     this.currStacks();
//   }

//   pop(): number {
//     const result =
//       this.stack1.length === 0
//         ? (this.stack2.pop() as number)
//         : (this.stack1.pop() as number);

//     this.currStacks();

//     return result;
//   }

//   peek(): number {
//     const length1 = this.stack1.length;
//     const length2 = this.stack2.length;
//     const result =
//       length1 === 0 ? this.stack2[length2 - 1] : this.stack1[length1 - 1];

//     this.currStacks();

//     return result;
//   }

//   empty(): boolean {
//     const result = this.stack1.length === 0 && this.stack2.length === 0;

//     this.currStacks();

//     return result;
//   }

//   currStacks(): void {
//     console.log(`stack1: ${this.stack1} | stack2: ${this.stack2}`);
//   }
// }

class MyQueue {
  stack1: number[];
  stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop() as number);
      }
    }

    return this.stack2.pop() as number;
  }

  peek(): number {
    const length2 = this.stack2.length;
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop() as number);
      }
    }
    return this.stack2[length2 - 1];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// const methods = ["MyQueue", "push", "push", "peek", "pop", "empty"];
// const values = [[], [1], [2], [], [], []];
const methods = [
  "MyQueue",
  "push",
  "push",
  "push",
  "push",
  "pop",
  "push",
  "pop",
  "pop",
  "pop",
  "pop",
];
const values = [[], [1], [2], [3], [4], [], [5], [], [], [], []];

const myQueue = new MyQueue();

for (let i = 0; i < methods.length; i += 1) {
  if (i > 0) {
    const method = methods[i];
    const value = values[i][0];
    const result = myQueue[method](value);

    console.log(
      `${method} - ${typeof value === "number" ? value : "empty"}: ${
        typeof result === "number" ? result : ""
      }`
    );
    console.log("---------------------------");
  }
}
