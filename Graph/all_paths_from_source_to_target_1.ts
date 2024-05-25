function allPathsSourceTarget(graph: number[][]): number[][] {
  const queue: [number, number[]][] = [[0, [0]]];
  const paths: number[][] = [];

  while (queue.length > 0) {
    const [node, path] = queue.pop() as [number, number[]]

    if (node === graph.length - 1) {
      paths.push(path);
    }

    for (const item of graph[node]) {
      queue.unshift([item, [...path, item]]);
    }
  }

  return paths;
}

// console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
// console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
console.log(
  allPathsSourceTarget([
    [3, 1],
    [4, 6, 7, 2, 5],
    [4, 6, 3],
    [6, 4],
    [7, 6, 5],
    [6],
    [7],
    [],
  ])
);
