function intersection(nums1: number[], nums2: number[]): number[] {
    const uniqueNums1 = new Set(nums1)
    const uniqueNums2 = new Set(nums2)

    return [...uniqueNums1].filter(item => [...uniqueNums2].includes(item))

};