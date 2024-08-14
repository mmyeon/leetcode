function findMin(nums: number[]): number {

    let start = 0, end = nums.length - 1;
    let middleIndex;

    while (start < end) {
        middleIndex = Math.floor((start + end) / 2);

        if(nums[middleIndex] > nums[end]) {
            start = middleIndex + 1;
        } else {
            end = middleIndex;
        }
    }

    return nums[start]
};




