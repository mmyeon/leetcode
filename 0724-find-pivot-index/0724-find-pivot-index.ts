function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = 0;
    let leftSumArray = [];
    let rightSumArray = [];

    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        leftSumArray[i] = leftSum;
    }


    for (let i = nums.length - 1; i >= 0; i--) {
        rightSum += nums[i];
        rightSumArray[i] = rightSum;
    }


    for (let i = 0; i < nums.length; i++) {
        if (leftSumArray[i] === rightSumArray[i]) return i;

    }


    return -1;
};