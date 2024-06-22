function findRelativeRanks(score: number[]): string[] {
    let rankResult = [];
    let sortedScore = [...score].sort((a, b) => b - a);

    for (let i = 0; i < score.length; i++) {
        if (score[i] === sortedScore[0]) rankResult.push("Gold Medal");
        else if (score[i] === sortedScore[1]) rankResult.push("Silver Medal");
        else if (score[i] === sortedScore[2]) rankResult.push("Bronze Medal");

        else rankResult.push(String((sortedScore.findIndex(number => number === score[i])) + 1));
    }

    return rankResult;
};