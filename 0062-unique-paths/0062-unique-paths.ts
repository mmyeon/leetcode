// time : O(m x n)
// memory : O(n)

function uniquePaths(m: number, n: number): number {
    let rowDP = Array(n).fill(1);

    for(let row = 1; row < m; row++){
        let left = 1;
        for(let col = 1; col < n; col++) {
            left += rowDP[col];
            rowDP[col] = left;
        }
    }

    return rowDP[n-1];
};