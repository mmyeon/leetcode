function mostFrequentEven(nums: number[]): number {
    let dic: Record<string, number> = {};
    let maxCount = 0;
    let frequentEvenNumber = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            dic[nums[i]] ? dic[nums[i]]++ : dic[nums[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(dic)) {
        if (value > maxCount) {
            maxCount = value;
            frequentEvenNumber = Number(key);
        }
    }

    return frequentEvenNumber;
};