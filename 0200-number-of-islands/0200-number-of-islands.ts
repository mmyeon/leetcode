function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let visited = new Set<string>();

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === "0") return;

        const key = `${row},${col}`

        if (visited.has(key)) return;

        visited.add(key)

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const key = `${i},${j}`
            if (!visited.has(key) && grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};