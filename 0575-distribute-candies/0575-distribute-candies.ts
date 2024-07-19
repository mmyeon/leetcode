function distributeCandies(candyType: number[]): number {
    const candyTypeSet = new Set(candyType).size
    const edibleCandyNum = candyType.length / 2

    return Math.min(candyTypeSet, edibleCandyNum)
};