function findJudge(n: number, trust: number[][]): number {
    if (n === 1 && trust.length === 0) return 1;

    let trustCounts = new Array(n + 1).fill(0)
    let trustedBy = new Array(n + 1).fill(0)


    for (const [a, b] of trust) {
        trustCounts[a]++;
        trustedBy[b]++;
    }

    for (let i = 0; i <= n; i++) {
        if (trustCounts[i] === 0 && trustedBy[i] === n - 1) {
            return i;
        }
    }

    return -1;

};