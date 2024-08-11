const countStr = (str: string): string => {
    let count = new Array(26).fill(0);

    for (const char of str) {
        const charIndex = char.charCodeAt(0) - "a".charCodeAt(0);
        count[charIndex]++;
    }

    return count.join("-");
}

function groupAnagrams(strs: string[]): string[][] {
    let dictionary: Record<string, string[]> = {};

    for (const str of strs) {
    const key = countStr(str)

        if (dictionary[key]) {
            dictionary[key].push(str)
        } else {
            dictionary[key] = [str]
        }
    }

    return Object.values(dictionary)
};