const storeWords = (sentence: string, hash:Record<string, number>) => {
    const words = sentence.split(" ")
    for (const word of words) {
        if (hash[word]) {
            hash[word]++
        } else {
            hash[word] = 1
        }
    }
}

function uncommonFromSentences(s1: string, s2: string): string[] {
    let hash: Record<string, number> = {}

    storeWords(s1, hash)
    storeWords(s2, hash)

    return Object.entries(hash).filter(([key, value]) => value === 1).map(([key, value]) => key)

};