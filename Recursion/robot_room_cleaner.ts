// Define the Robot interface
interface Robot {
  move(): boolean;
  turnRight(): void;
  clean(): void;
}

// Define directions: 0: 'up', 1: 'right', 2: 'down', 3: 'left'
const directions: [number, number][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const visited: Set<string> = new Set();

function goBack(robot: Robot): void {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}

function backtrack(robot: Robot, cell: [number, number], d: number): void {
  const cellKey = `${cell[0]},${cell[1]}`;
  visited.add(cellKey);
  robot.clean();

  for (let i = 0; i < 4; i++) {
    const newD = (d + i) % 4;
    const newCell: [number, number] = [
      cell[0] + directions[newD][0],
      cell[1] + directions[newD][1],
    ];
    const newCellKey = `${newCell[0]},${newCell[1]}`;

    if (!visited.has(newCellKey) && robot.move()) {
      backtrack(robot, newCell, newD);
      goBack(robot);
    }
    // turn the robot following chosen direction : clockwise
    robot.turnRight();
  }
}

function cleanRoom(robot: Robot): void {
  backtrack(robot, [0, 0], 0); // Start at position [1, 3]
}

// Mock Robot implementation
class MockRobot implements Robot {
  private room: number[][];
  private position: [number, number];
  private direction: number;

  constructor(room: number[][], startPosition: [number, number]) {
    this.room = room;
    this.position = startPosition;
    this.direction = 0; // Initially facing up
  }

  move(): boolean {
    const [dx, dy] = directions[this.direction];
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

// Simulation
const room = [
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const startPosition: [number, number] = [1, 3];
const robot = new MockRobot(room, startPosition);

console.log("Initial room state:");
console.log(robot.getRoomState());

cleanRoom(robot);

console.log("\nFinal room state:");
console.log(robot.getRoomState());

// Helper function to count cleaned cells
function countCleanedCells(room: number[][]): number {
  return room.flat().filter((cell) => cell === 2).length;
}

console.log(
  `\nNumber of cells cleaned: ${countCleanedCells(robot.getRoomState())}`
);
