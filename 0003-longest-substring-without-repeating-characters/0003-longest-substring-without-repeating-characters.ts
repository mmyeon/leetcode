function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, start = 0, end = 0; 
    let chars = new Set();

    while (end < s.length) {
        if(chars.has(s[end])) {
            chars.delete(s[start]);
            start++; 
        } else {
            chars.add(s[end]);
            end++;
            maxLength = Math.max(end - start, maxLength)
        }
    }

    return maxLength;
}