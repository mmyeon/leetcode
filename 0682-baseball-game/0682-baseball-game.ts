function calPoints(operations: string[]): number {
    let score = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "C") {
            score.pop()
        } else if (operations[i] === "D") {
            score.push(score[score.length - 1] * 2)
        } else if (operations[i] === "+") {
            score.push(score[score.length - 1] + score[score.length - 2])
        } else {
            score.push(Number(operations[i]))
        }
    }

    return score.reduce((acc, cur) => acc + cur, 0)
};