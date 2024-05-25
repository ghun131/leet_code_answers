class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (!node) return node;

  const visited: Map<Node, Node> = new Map();
  visited.set(node, new Node(node.val));

  const stack: Node[] = [node];
  while (stack.length > 0) {
    const curr = stack.pop() as Node;
    const clone = visited.get(curr) as Node;
    for (const item of curr.neighbors) {
      if (!visited.has(item)) {
        stack.push(item);
        visited.set(item, new Node(item.val));
      }
      clone.neighbors.push(visited.get(item));
    }
  }

  return visited.get(node);
}

// function cloneGraph(node: Node | null): Node | null {
//   const visited = new Map();
//   const dfs = (node: Node | null): Node | null => {
//     if (node === null) {
//       return null;
//     }
//     // If the node was already visited before.
//     // Return the clone from the visited dictionary.
//     if (visited.has(node)) {
//       return visited.get(node);
//     }
//     console.log("visited:", visited);
//     console.log('----------------');
//     // Create a clone for the given node.
//     // Note that we don't have cloned neighbors as of now, hence [].
//     let cloneNode = new Node(node.val, []);
//     // The key is original node and value being the clone node.
//     visited.set(node, cloneNode);
//     if (node.neighbors !== undefined) {
//       for (const neighbor of node.neighbors) {
//         cloneNode.neighbors.push(dfs(neighbor));
//       }
//     }
//     return cloneNode;
//   };
//   return dfs(node);
// }

const input = {
  val: 1,
  neighbors: [
    {
      val: 2,
      neighbors: [
        { val: 1, neighbors: [] },
        {
          val: 3,
          neighbors: [
            { val: 2, neighbors: [] },
            { val: 4, neighbors: [] },
          ],
        },
      ],
    },
    {
      val: 4,
      neighbors: [
        { val: 1, neighbors: [] },
        {
          val: 3,
          neighbors: [
            { val: 2, neighbors: [] },
            { val: 4, neighbors: [] },
          ],
        },
      ],
    },
  ],
};

console.log(JSON.stringify(cloneGraph(input)));
