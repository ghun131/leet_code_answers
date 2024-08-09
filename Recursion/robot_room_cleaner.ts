// ------------------------------------------- PROMPT -------------------------------------------
interface Robot {
  move(): boolean;
  turnRight(): void;
  clean(): void;
}

// Helper function to count cleaned cells
function countCleanedCells(room: number[][]): number {
  return room.flat().filter((cell) => cell === 2).length;
}

// Mock Robot implementation
class MockRobot implements Robot {
  private room: number[][];
  private position: [number, number];
  private direction: number;
  private directions: [number, number][];

  constructor(room: number[][], startPosition: [number, number]) {
    this.room = room;
    this.position = startPosition;
    this.direction = 0; // Initially facing up
    this.directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  }

  move(): boolean {
    const [dx, dy] = this.directions[this.direction];
    const newPosition: [number, number] = [
      this.position[0] + dx,
      this.position[1] + dy,
    ];

    if (this.isValidMove(newPosition)) {
      this.position = newPosition;
      return true;
    }
    return false;
  }

  turnRight(): void {
    this.direction = (this.direction + 1) % 4;
  }

  clean(): void {
    const [row, col] = this.position;
    if (this.room[row][col] === 1) {
      this.room[row][col] = 2; // Mark as cleaned
    }
  }

  private isValidMove([row, col]: [number, number]): boolean {
    return (
      row >= 0 &&
      row < this.room.length &&
      col >= 0 &&
      col < this.room[0].length &&
      this.room[row][col] !== 0
    );
  }

  getRoomState(): number[][] {
    return this.room.map((row) => [...row]);
  }
}

// ------------------------------------------- ANSWER -------------------------------------------

// --------------- FIRST ANSWER ---------------
function goBack(robot: Robot) {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}

const visited = new Set();
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
function backtrack(robot: Robot, cell: [number, number], d: number) {
  console.log("add cell", cell);

  visited.add(cell.toString());
  robot.clean();

  for (let i = 0; i < 4; i += 1) {
    const newD = (d + i) % 4;
    const newCell: [number, number] = [
      cell[0] + directions[newD][0],
      cell[1] + directions[newD][1],
    ];

    if (!visited.has(newCell.toString()) && robot.move()) {
      backtrack(robot, newCell, newD);
      goBack(robot);
    }

    robot.turnRight();
  }
  console.log(visited);
}

function cleanRoom1(robot: Robot): void {
  backtrack(robot, [0, 0], 0);
}

// --------------- SECOND ANSWER ---------------
function cleanRoom2(robot: Robot): void {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function goBack(robot: Robot) {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }

  const visited = new Set();
  function backtrack(robot: Robot, cell: [number, number], d: number) {
    console.log("add cell", cell);
    visited.add(cell.toString());
    robot.clean();

    for (let i = 0; i < 4; i += 1) {
      const newD = (d + i) % 4;
      const newCell: [number, number] = [
        cell[0] + directions[newD][0],
        cell[1] + directions[newD][1],
      ];

      if (!visited.has(newCell.toString()) && robot.move()) {
        backtrack(robot, newCell, newD);
        goBack(robot);
      }

      robot.turnRight();
    }
    console.log(visited);
  }

  backtrack(robot, [0, 0], 0);
}

// ------------------------------------------- SIMULATION -------------------------------------------
const room1 = [
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
const robot1 = new MockRobot(room1, [1, 3]);

console.log("Initial room state:", robot1.getRoomState());

cleanRoom1(robot1);

console.log("\nFinal room state:", robot1.getRoomState());

console.log(
  `\nNumber of cells cleaned: ${countCleanedCells(robot1.getRoomState())}`
);

const room2 = [
  [1, 1],
  [1, 1],
];
const robot2 = new MockRobot(room2, [0, 0]);

console.log("Initial room state:", robot2.getRoomState());

cleanRoom1(robot2);

console.log("\nFinal room state:", robot2.getRoomState());

console.log(
  `\nNumber of cells cleaned: ${countCleanedCells(robot2.getRoomState())}`
);

const room3 = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
];
const robot3 = new MockRobot(room3, [1, 3]);

console.log("Initial room state:", robot3.getRoomState());

cleanRoom1(robot3);

console.log("\nFinal room state:", robot3.getRoomState());

console.log(
  `\nNumber of cells cleaned: ${countCleanedCells(robot3.getRoomState())}`
);

const room4 = [
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
];
const robot4 = new MockRobot(room4, [3, 0]);

console.log("Initial room state:", robot4.getRoomState());

cleanRoom1(robot4);

console.log("\nFinal room state:", robot4.getRoomState());

console.log(
  `\nNumber of cells cleaned: ${countCleanedCells(robot4.getRoomState())}`
);

// const room5 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 1, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ];

const room5 = [[1], [1]];
const robot5 = new MockRobot(room5, [0, 0]);

console.log("Initial room state cleanRoom1:", robot5.getRoomState());

cleanRoom1(robot5);

console.log("\nFinal room state cleanRoom1:", robot5.getRoomState());

console.log(
  `\nNumber of cells cleaned cleanRoom1: ${countCleanedCells(robot5.getRoomState())}`
);

console.log("Initial room state cleanRoom2:", robot5.getRoomState());

cleanRoom2(robot5);

console.log("\nFinal room state cleanRoom2:", robot5.getRoomState());

console.log(
  `\nNumber of cells cleaned cleanRoom2: ${countCleanedCells(robot5.getRoomState())}`
);