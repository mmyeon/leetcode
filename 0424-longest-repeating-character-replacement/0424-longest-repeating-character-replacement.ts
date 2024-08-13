function characterReplacement(s: string, k: number): number {
    let counter: Record<string, number> = {}
    let maxLength = 0, maxCount = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        counter[s[end]] = (counter[s[end]] || 0) + 1;
        maxCount = Math.max(counter[s[end]], maxCount);

        while (end - start + 1 - maxCount > k) {
            counter[s[start]]--;
            start++
        }

        maxLength = Math.max(end - start + 1, maxLength)
    }

    return maxLength;
};