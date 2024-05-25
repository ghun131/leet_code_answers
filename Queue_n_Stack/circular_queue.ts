type Node = {
  val: number;
  next: Node | null;
};
class MyCircularQueue {
  capacity: number;
  count: number;
  head: Node | null;
  tail: Node | null;
  constructor(k: number) {
    this.capacity = k;
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  enQueue(value: number): boolean {
    const node: Node = { val: value, next: null };
    if (this.isFull()) return false;

    if (this.count === 0) {
      this.head = this.tail = node;
      this.count++;
      return true;
    }

    this.tail.next = node;
    this.tail = node;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    this.head = this.head?.next;
    this.count--;

    console.log("dequeue", this.tail);

    return true;
  }

  Front(): number {
    if (this.count === 0) return -1;
    return this.head?.val;
  }

  Rear(): number {
    if (this.count === 0) return -1;
    return this.tail?.val;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }
}

// class MyCircularQueue {
//   count: number;
//   headIdx: number;
//   tailIdx: number;
//   capacity: number;
//   queue: Array<number>;

//   constructor(k: number) {
//     this.headIdx = 0;
//     this.queue = Array(k).fill(-1);
//     this.count = 0;
//     this.capacity = k;
//   }

//   enQueue(value: number): boolean {
//     if (this.isFull()) return false;

//     const tail = (this.headIdx + this.count) % this.capacity;
//     console.log("tail:", tail)
//     this.queue[tail] = value;
//     this.count++;

//     return true;
//   }

//   deQueue(): boolean {
//     if (this.isEmpty()) return false;

//     this.headIdx = (this.headIdx + 1) % this.capacity;
//     this.count--;

//     return true;
//   }

//   Front(): number {
//     if (this.count === 0) return -1;

//     return this.queue[this.headIdx];
//   }

//   Rear(): number {
//     if (this.count === 0) return -1;

//     return this.queue[(this.headIdx + this.count - 1) % this.capacity];
//   }

//   isEmpty(): boolean {
//     return this.count === 0;
//   }

//   isFull(): boolean {
//     return this.count === this.capacity;
//   }
// }

const funcs = [
  "MyCircularQueue",
  "enQueue",
  "deQueue",
  "enQueue",
  "enQueue",
  "deQueue",
  "isFull",
  "isFull",
  "Front",
  "deQueue",
  "enQueue",
  "Front",
  "enQueue",
  "enQueue",
  "Rear",
  "Rear",
  "deQueue",
  "enQueue",
  "enQueue",
  "Rear",
  "Rear",
  "Front",
  "Rear",
  "Rear",
  "deQueue",
  "enQueue",
  "Rear",
  "deQueue",
  "Rear",
  "Rear",
  "Front",
  "Front",
  "enQueue",
  "enQueue",
  "Front",
  "enQueue",
  "enQueue",
  "enQueue",
  "Front",
  "isEmpty",
  "enQueue",
  "Rear",
  "enQueue",
  "Front",
  "enQueue",
  "enQueue",
  "Front",
  "enQueue",
  "deQueue",
  "deQueue",
  "enQueue",
  "deQueue",
  "Front",
  "enQueue",
  "Rear",
  "isEmpty",
  "Front",
  "enQueue",
  "Front",
  "deQueue",
  "enQueue",
  "enQueue",
  "deQueue",
  "deQueue",
  "Front",
  "Front",
  "deQueue",
  "isEmpty",
  "enQueue",
  "Rear",
  "Front",
  "enQueue",
  "isEmpty",
  "Front",
  "Front",
  "enQueue",
  "enQueue",
  "enQueue",
  "Rear",
  "Front",
  "Front",
  "enQueue",
  "isEmpty",
  "deQueue",
  "enQueue",
  "enQueue",
  "Rear",
  "deQueue",
  "Rear",
  "Front",
  "enQueue",
  "deQueue",
  "Rear",
  "Front",
  "Rear",
  "deQueue",
  "Rear",
  "Rear",
  "enQueue",
  "enQueue",
  "Rear",
  "enQueue",
];
const values = [
  [81],
  [69],
  [],
  [92],
  [12],
  [],
  [],
  [],
  [],
  [],
  [28],
  [],
  [13],
  [45],
  [],
  [],
  [],
  [24],
  [27],
  [],
  [],
  [],
  [],
  [],
  [],
  [88],
  [],
  [],
  [],
  [],
  [],
  [],
  [53],
  [39],
  [],
  [28],
  [66],
  [17],
  [],
  [],
  [47],
  [],
  [87],
  [],
  [92],
  [94],
  [],
  [59],
  [],
  [],
  [99],
  [],
  [],
  [84],
  [],
  [],
  [],
  [52],
  [],
  [],
  [86],
  [30],
  [],
  [],
  [],
  [],
  [],
  [],
  [45],
  [],
  [],
  [83],
  [],
  [],
  [],
  [22],
  [77],
  [23],
  [],
  [],
  [],
  [14],
  [],
  [],
  [90],
  [57],
  [],
  [],
  [],
  [],
  [34],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [49],
  [59],
  [],
  [71],
];

const myCircularQueue = new MyCircularQueue(values[0][0]);

for (let i = 0; i < funcs.length; i++) {
  const method = funcs[i];
  const value = values[i][0];

  if (i > 0) {
    const result = myCircularQueue[method](value);
    console.log("method:", method, "value:", value, "result:", result);
    console.log("--------------------------");
  }
}
