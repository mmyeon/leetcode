function wordBreak(s: string, wordDict: string[]): boolean {
    // 메모이제이션 마지막에 하기 
    const memo = {};

    const dp = (start: number): boolean => {
        if (start in memo) return memo[start];
        if (start === s.length) return true;

        for (const word of wordDict) {
            if (s.substring(start, start + word.length) === word) {
                if (dp(start + word.length)) {
                    memo[start] = true
                    return true;
                }
            }
        }

        memo[start] = false;
        return false;
    }

    return dp(0)
};