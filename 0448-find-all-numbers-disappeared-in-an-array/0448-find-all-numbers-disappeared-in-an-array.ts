function findDisappearedNumbers(nums: number[]): number[] {
    let hash = {};

    for (let i = 1; i <= nums.length; i++) {
        hash[i] = false;
    }

    for (const num of nums) {
        hash[num] = true;
    }
    
    return Object.entries(hash)
        .filter(([key, value]) => !value)
        .map(([key, value]) => Number(key))
};