function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (x, y) => {
        if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === "0") return;

        grid[x][y] = "0";

        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
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