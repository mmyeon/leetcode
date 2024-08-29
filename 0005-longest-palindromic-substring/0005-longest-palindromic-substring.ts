function longestPalindrome(s: string): string {
    let maxStartIndex = 0, maxEndIndex = 0;

    for (let i = 0; i < s.length; i++) {
        let start = i, end = i

        while (0 <= start && end < s.length && s[start] === s[end]) {
            if (maxEndIndex - maxStartIndex < end - start) {
                maxStartIndex = start
                maxEndIndex = end
            }
            start--;
            end++;
        }

        start = i, end = i + 1

        while (start >= 0 && end < s.length && s[start] === s[end]) {
            if (maxEndIndex - maxStartIndex < end - start) {
                maxStartIndex = start
                maxEndIndex = end
            }
            start--;
            end++;
        }

    }

    return s.slice(maxStartIndex, maxEndIndex + 1)
};