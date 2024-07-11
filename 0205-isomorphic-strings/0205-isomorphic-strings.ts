function isIsomorphic(s: string, t: string): boolean {
    let hashTable: Record<string, string> = {};

    for (let i = 0; i < s.length; i++) {
        if (!(Object.values(hashTable).includes(t[i]))) {
            hashTable[s[i]] = t[i]
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]] !== t[i]) return false;
    }

    return true;
};