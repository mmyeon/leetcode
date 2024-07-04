function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack = [];
    let hashTable = new Map();

    for (const num of nums2) {
        // num이 stack 숫자보다 큰 경우, hashTable에 저장하기 
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            hashTable.set(stack.pop(), num);
        }

        // nums2 숫자 삽입 
        stack.push(num)
    }

    while (stack.length > 0) {
        hashTable.set(stack.pop(), -1);
    }

    return nums1.map(num => hashTable.get(num));
};