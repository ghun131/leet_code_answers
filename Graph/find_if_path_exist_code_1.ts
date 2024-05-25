function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (edges.length === 0) return true;

  const queue: number[][] = [];
  const map = new Map();

  for (const edge of edges) {
    if (edge.includes(source)) {
      queue.unshift(edge);
    }

    const first = map.get(edge[0]);
    first ? first.push(edge) : map.set(edge[0], [edge]);

    const second = map.get(edge[1]);
    second ? second.push(edge) : map.set(edge[1], [edge]);
  }
  console.log("map:", map);

  let currSource: number | undefined = source;
  const seens = new Map();
  seens.set(currSource, true);
  while (queue.length > 0) {
    const curr = queue.pop() as number[];

    if (curr.some(item => item === destination)) return true;

    const currIdx = curr?.findIndex((val) => val === currSource);

    if (currIdx < 0) {
      seens.get(curr[0]) ? (currSource = curr[1]) : (currSource = curr[0]);
    } else {
      // flip the index because array only has 2 elements
      // and I need the other element
      const idx = currIdx ^ 1;
      currSource = curr[idx];
    }

    const seen = seens.get(currSource);

    if (!seen) {
      const paths = map
        .get(currSource)
        .filter((el) => curr[0] !== el[0] || curr[1] !== el[1]);

      queue.unshift(...paths);
    }

    seens.set(currSource, true);
  }

  return false;
}
const result = validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  0
);
console.log("result:", result);

// const result = validPath(
//   50,
//   [
//     [19, 27],
//     [10, 43],
//     [6, 45],
//     [36, 23],
//     [38, 26],
//     [14, 8],
//     [31, 11],
//     [11, 49],
//     [32, 33],
//     [17, 10],
//     [18, 38],
//     [14, 34],
//     [2, 6],
//     [33, 31],
//     [48, 16],
//     [43, 42],
//     [0, 15],
//     [12, 1],
//     [13, 7],
//     [7, 4],
//     [49, 2],
//     [28, 35],
//     [22, 37],
//     [39, 20],
//     [44, 39],
//     [5, 25],
//     [24, 41],
//     [40, 30],
//     [25, 29],
//     [35, 24],
//     [29, 18],
//     [27, 22],
//     [45, 12],
//     [3, 46],
//     [20, 40],
//     [37, 32],
//     [16, 19],
//     [15, 44],
//     [9, 47],
//     [4, 5],
//     [8, 9],
//     [23, 48],
//     [30, 3],
//     [47, 17],
//     [41, 0],
//     [1, 21],
//     [26, 28],
//     [42, 36],
//     [21, 13],
//   ],
//   14,
//   34
// );
// console.log("result:", result);

// const result = validPath(
//   6,
//   [
//     [0, 1],
//     [0, 2],
//     [3, 5],
//     [5, 4],
//     [4, 3],
//   ],
//   0,
//   5
// );
// console.log("result:", result);

// const result = validPath(
//   3,
//   [
//     [0, 1],
//     [1, 2],
//     [2, 0],
//   ],
//   0,
//   2
// );
// console.log("result:", result);

// const result = validPath(
//   10,
//   [
//     [0, 7],
//     [0, 8],
//     [6, 1],
//     [2, 0],
//     [0, 4],
//     [5, 8],
//     [4, 7],
//     [1, 3],
//     [3, 5],
//     [6, 5],
//   ],
//   7,
//   5
// );
// console.log("result:", result);

// const result = validPath(
//   10,
//   [
//     [2, 6],
//     [4, 7],
//     [1, 2],
//     [3, 5],
//     [7, 9],
//     [6, 4],
//     [9, 8],
//     [0, 1],
//     [3, 0],
//   ],
//   3,
//   5
// );
// console.log("result:", result);

// const result = validPath(
//   50,
//   [
//     [31, 5],
//     [10, 46],
//     [19, 31],
//     [5, 1],
//     [31, 28],
//     [28, 29],
//     [8, 26],
//     [13, 23],
//     [16, 34],
//     [30, 1],
//     [16, 18],
//     [33, 46],
//     [27, 35],
//     [2, 25],
//     [49, 33],
//     [44, 19],
//     [22, 26],
//     [30, 13],
//     [27, 12],
//     [8, 16],
//     [42, 13],
//     [18, 3],
//     [21, 20],
//     [2, 17],
//     [5, 48],
//     [41, 37],
//     [39, 37],
//     [2, 11],
//     [20, 26],
//     [19, 43],
//     [45, 7],
//     [0, 21],
//     [44, 23],
//     [2, 39],
//     [27, 36],
//     [41, 48],
//     [17, 42],
//     [40, 32],
//     [2, 28],
//     [35, 38],
//     [3, 9],
//     [41, 30],
//     [5, 11],
//     [24, 22],
//     [39, 5],
//     [40, 31],
//     [18, 35],
//     [23, 39],
//     [20, 24],
//     [45, 12],
//   ],
//   29,
//   46
// );
// console.log("result:", result);
