function distributeCandies(candyType: number[]): number {
    const candyTypeSet = new Set(candyType)
    const edibleCandyNum = candyType.length / 2

    return edibleCandyNum >= candyTypeSet.size ? candyTypeSet.size : edibleCandyNum
};