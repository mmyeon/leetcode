function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    const dp = (start, end) => {
        let prev = 0, curr = 0;

        for (let i = start; i < end; i++) {
            const temp = curr;
            curr = Math.max(prev + nums[i], curr)
            prev = temp;
        }

        return curr
    }

    return Math.max(dp(0, nums.length - 1), dp(1, nums.length))
};