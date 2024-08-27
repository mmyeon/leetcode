function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    // 알아야 하는 값 
    // prev1 = dp[i-1]
    // prev2 = dp[i-2]
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1
        prev1 = current
    }

    return prev1
};