function search(nums: number[], target: number): number {
    // O(log n)을 위해서 이진 탐색 사용 
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2);

        if (nums[middleIndex] === target) return middleIndex;

        // 왼쪽에 변곡점이 있는 경우
        if (nums[start] <= nums[middleIndex]) {
            if (nums[start] <= target && target < nums[middleIndex]) {
                end = middleIndex - 1;
            } else {
                start = middleIndex + 1;
            }

        } else {
            // 오른쪽에 변곡점이 있는 경우
            if (nums[middleIndex] < target && target <= nums[end]) {
                start = middleIndex + 1;
            } else {
                end = middleIndex - 1;
            }
        }
    }

    // 이진 탐색했지만 값 못찾은 경우 
    return -1;
}