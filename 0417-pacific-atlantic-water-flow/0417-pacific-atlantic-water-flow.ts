function pacificAtlantic(heights: number[][]): number[][] {
    let rows = heights.length;
    let cols = heights[0].length;

    let pacificVisited = new Map<string, boolean>()
    let atlanticVisited = new Map<string, boolean>()

    const dfs = (row: number, col: number, visited: Map<string, boolean>) => {
        const key = `${row},${col}`

        if (visited.has(key)) return;

        visited.set(key, true)

        // 해당 셀의 상하좌우 확인
        const directions = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]
        for (const [r, c] of directions) {
            if (r >= 0 && r < rows && c >= 0 && c < cols && heights[r][c] >= heights[row][col]) { dfs(r, c, visited) }
        }
    }

    for (let row = 0; row < rows; row++) {
        // 대평양 왼쪽 경계
        dfs(row, 0, pacificVisited)
        // 대서양 오른쪽 경계
        dfs(row, cols - 1, atlanticVisited)
    }

    for (let col = 0; col < cols; col++) {
        // 대평양 상단 경계
        dfs(0, col, pacificVisited)
        // 대서양 하단 경계
        dfs(rows - 1, col, atlanticVisited)
    }

    // 두 셀 방문 목록에서 교집합 구하기 
    let result = [];

    pacificVisited.forEach((_, key) => {
        if (atlanticVisited.has(key)) {
            const location = key.split(",").map(Number);
            result.push(location)
        }
    })


    return result

};