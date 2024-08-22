function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (row, col) => {
        let stack = [[row, col]]

        while (stack.length > 0) {
            const [row, col] = stack.pop();

            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === "0") continue;

            grid[row][col] = "0"

            stack.push([row + 1, col])
            stack.push([row - 1, col])
            stack.push([row, col + 1])
            stack.push([row, col - 1])
        }
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};