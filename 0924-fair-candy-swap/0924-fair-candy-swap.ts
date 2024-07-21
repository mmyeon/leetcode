function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const aliceCandySum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
    const bobCandySum = bobSizes.reduce((acc, cur) => acc + cur, 0);
    const delta = (bobCandySum - aliceCandySum) / 2
    const bobSizesSet = new Set(bobSizes)

    for (const aliceCandyNum of aliceSizes) {
        const bobCandyNum = aliceCandyNum + delta;

        if (bobSizesSet.has(bobCandyNum))
            return [aliceCandyNum, bobCandyNum]

    }
};