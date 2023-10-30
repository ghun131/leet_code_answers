function equalPairs(grid: number[][]): number {
    const map = new Map()

    for (let item of grid) {
        const key = item.join('~');
        map.set(key, (map.get(key) || 0) + 1);
    }

    let result = 0;
    const length = grid.length;

    for (let c = 0; c < length; c++) {
        const column = [];

        for (let r = 0; r < length; r++) {
            column.push(grid[r][c]);
        }

        const cKey = column.join('~')
        if (map.get(cKey)) {
            result += map.get(cKey);
        }
    }

    return result;
};

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));
console.log(equalPairs([[11,1],[1,11]]));
