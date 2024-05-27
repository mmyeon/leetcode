function productExceptSelf(nums: number[]): number[] {
    // 시간 복잡도 O(n)으로 풀기
    const result = new Array(nums.length).fill(1);
    // 곱하기에 영향주지 않는 값이라 1로 설정 
    let leftProduct = 1;
    let rightProduct = 1;

    // result 배열에 왼쪽 숫자들 곱 먼저 담기
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i]
    }

    // result 배열에 오른쪽 숫자들 곱 이어서 담기
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i]
    }


    return result;
};