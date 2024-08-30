function countSubstrings(s: string): number {

    let palindromes = [];

    for (let i = 0; i < s.length; i++) {
        // 홀수 중심의 palindrome
        let start = i, end = i;
        while (0 <= start && end < s.length && s[start] === s[end]) {
            palindromes.push(s.slice(start, end + 1))
            start--;
            end++;
        }

        // 짝수 중심의 palindrome            
        start = i; end = i + 1;
        while (0 <= start && end < s.length && s[start] === s[end]) {
            palindromes.push(s.slice(start, end + 1))
            start--
            end++
        }
    }

    return palindromes.length
};