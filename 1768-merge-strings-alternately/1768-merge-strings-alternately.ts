function mergeAlternately(word1: string, word2: string): string {
    const minLength = Math.min(word1.length,word2.length);
    const resStr =  minLength < word1.length ? word1 : word2;
    let result = "";   

    for (let i = 0; i < minLength; i++) {
        result += word1[i]
        result += word2[i]
    }

    return result + resStr.slice(minLength)
};