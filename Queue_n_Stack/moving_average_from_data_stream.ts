/* Loop back solution */
// class MovingAverage {
//   size: number;
//   queue: number[];
//   constructor(size: number) {
//     this.queue = [];
//     this.size = size;
//   }

//   next(val: number): number {
//     this.queue.push(val);
//     let sum = 0;
//     let i = this.queue.length - 1;
//     let count = this.size;

//     while (count > 0 && i >= 0) {
//       sum += this.queue[i];
//       i--;
//       count--;
//     }

//     const devided =
//       this.queue.length < this.size ? this.queue.length : this.size;

//     return sum / devided;
//   }
// }

/* Sliding window solution */
// class MovingAverage {
//   queue: number[];
//   sum: number;
//   count: number;
//   size: number;
//   constructor(size: number) {
//     this.queue = [];
//     this.size = size;
//     this.sum = 0;
//     this.count = 0;
//   }

//   next(val: number): number {
//     this.count++;
//     this.queue.push(val);

//     const head = this.count > this.size ? this.queue.shift() : 0;

//     this.sum = this.sum - (head || 0) + val;

//     return this.sum / Math.min(this.count, this.size);
//   }
// }

/* Sliding window solution */
class MovingAverage {
  queue: Array<number>;
  count: number;
  head: number;
  size: number;
  sum: number;
  constructor(size: number) {
    this.queue = new Array(size).fill(0);
    this.count = 0;
    this.head = 0;
    this.size = size;
    this.sum = 0;
  }

  next(val: number): number {
    this.count++;
    const tail = (this.head + this.count) % this.size;

    if (this.count < this.size) {
      this.sum += val;
    } else {
      this.sum = this.sum - this.queue[tail] + val;
    }
    this.queue[tail] = val;

    return this.sum / Math.min(this.count, this.size);
  }
}

const methods = ["MovingAverage", "next", "next", "next", "next"];
const values = [[3], [1], [10], [3], [5]];

const movingAverage = new MovingAverage(values[0][0]);

for (let i = 0; i < methods.length; i++) {
  const method = methods[i];
  const value = values[i][0];

  if (i > 0) {
    const result = movingAverage[method](value);
    console.log(`method: ${method}, value: ${value}, output: ${result}`);
  }
}
