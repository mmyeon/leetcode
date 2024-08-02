function minCostClimbingStairs(cost: number[]): number {
    const costLength = cost.length;
    if (costLength < 2) return cost[costLength]
    let dp = [];

    for (let i = 0; i < costLength; i++) {
        if (i < 2) { dp[i] = cost[i] }
        else {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
        }
    }

    return Math.min(dp[costLength - 1], dp[costLength - 2])
};

