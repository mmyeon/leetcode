function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])


    let firstHouseDpPrev2 = nums[0]
    let firstHouseDpPrev1 = Math.max(nums[0], nums[1])
    let lastHouseDpPrev2 = nums[1];
    let lastHouseDpPrev1 = Math.max(nums[1], nums[2]);

    // 첫 번째 집 포함되고 마지막 집 포함되지 않은 케이스
    for (let i = 2; i < nums.length - 1; i++) {
        const current = Math.max(firstHouseDpPrev1, firstHouseDpPrev2 + nums[i]);

        firstHouseDpPrev2 = firstHouseDpPrev1
        firstHouseDpPrev1 = current
    }

    // 첫 번째 집 포함되지 않고 마지막 집 포함된 케이스
    for (let i = 3; i < nums.length; i++) {
        const current = Math.max(lastHouseDpPrev1, lastHouseDpPrev2 + nums[i])

        lastHouseDpPrev2 = lastHouseDpPrev1
        lastHouseDpPrev1 = current
    }

    return Math.max(firstHouseDpPrev1, lastHouseDpPrev1)
};