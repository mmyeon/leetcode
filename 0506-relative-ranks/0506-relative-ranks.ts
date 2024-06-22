function getRank(rank: number): string {
    if (rank === 0) return "Gold Medal";
    if (rank === 1) return "Silver Medal";
    if (rank === 2) return "Bronze Medal";

    return String(rank + 1)
}

function findRelativeRanks(score: number[]): string[] {
    let sortedScore = score.slice().sort((a, b) => b - a);
    let map: Record<string, number> = {};

    sortedScore.forEach((score, index) => map[score] = index
    )

    return score.map((score) => getRank(map[score]));
};