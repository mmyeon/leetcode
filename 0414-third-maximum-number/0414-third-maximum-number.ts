function thirdMax(nums: number[]): number {
    const sortedNum = Array.from(new Set(nums)).sort((a, b) => b - a)

    return sortedNum.length > 2 ? sortedNum[2] : sortedNum[0];
};