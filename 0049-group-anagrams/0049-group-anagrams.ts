function groupAnagrams(strs: string[]): string[][] {
    let dictionary: Record<string, string[]> = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split("").sort().join()

        if (dictionary[sortedWord]) {
            dictionary[sortedWord].push(strs[i])
        } else {
            dictionary[sortedWord] = [strs[i]]
        }
    }
    
    return Object.values(dictionary)
};