function lengthOfLongestSubstring(s: string): number {
    let longestLength = 0;

    let dictionary: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
        dictionary[s[i]] = 1

        for (let j = i + 1; j < s.length; j++) {
            if (!dictionary[s[j]]) {
                dictionary[s[j]] = 1
            } else {
                longestLength = longestLength < Object.values(dictionary).length ? Object.values(dictionary).length : longestLength
                dictionary = {}
                break;
            }
        }
    }

    return longestLength < Object.values(dictionary).length ? Object.values(dictionary).length : longestLength;
}