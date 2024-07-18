function mostCommonWord(paragraph: string, banned: string[]): string {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g)
    const bannedSet = new Set(banned);
    const hash: Record<string, number> = {}
    let result = "";
    let maxCount = 0

    for (const word of words) {
        if (!bannedSet.has(word)) {
            hash[word] = (hash[word] || 0) + 1

            if (maxCount < hash[word]) {
                maxCount = hash[word]
                result = word;
            }
        }
    }
    return result;
};