function climbStairs(n: number): number {
    let memo = Array(n + 1).fill(-1);

    function dp(n: number): number {
        if (n === 1) return 1;
        if (n === 2) return 2;

        if (memo[n] !== -1) return memo[n];

        memo[n] = dp(n - 1) + dp(n - 2)
        return memo[n]
    }

    return dp(n)
};