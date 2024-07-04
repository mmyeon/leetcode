function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack: number[] = [];
    let hashTable: Map<number, number> = new Map();

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            hashTable.set(stack.pop(), num);
        }

        stack.push(num)
    }

    while (stack.length > 0) {
        hashTable.set(stack.pop(), -1);
    }

    return nums1.map(num => hashTable.get(num));
};