function findDisappearedNumbers(nums: number[]): number[] {
    let disappearedNumbers: number[] = [];
    const set = new Set(nums)

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) { disappearedNumbers.push(i) }
    }

    return disappearedNumbers
};