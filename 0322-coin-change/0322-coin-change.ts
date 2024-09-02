function coinChange(coins: number[], amount: number): number {
    // bfs
    // [동전 개수, 총 금액]
    const queue = [[0, 0]]
    const visited = new Set();

    while (queue.length > 0) {
        const [count, total] = queue.shift();

        if (total === amount) return count;

        if (visited.has(total)) continue;

        visited.add(total);

        for (const coin of coins) {
            if (total + coin <= amount) {
                queue.push([count + 1, total + coin])
            }
        }
    }

    return -1;
};