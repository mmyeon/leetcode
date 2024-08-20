function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    console.log("exist")


    const dfs = (x, y, index) => {
        if (index === word.length) return true;

        if (x < 0 || x >= rows || y < 0 || y >= cols.length || word[index] !== board[x][y]) return false;

        const temp = board[x][y];
        board[x][y] = "#";

        const found = dfs(x - 1, y, index + 1) ||
            dfs(x + 1, y, index + 1) ||
            dfs(x, y - 1, index + 1) ||
            dfs(x, y + 1, index + 1)

        board[x][y] = temp;

        return found
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true
        }
    }

    return false;
}
