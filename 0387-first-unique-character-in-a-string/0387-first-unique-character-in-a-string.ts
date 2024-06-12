function firstUniqChar(s: string): number {
    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]]) { hashMap[s[i]] += 1 }
        else {
            hashMap[s[i]] = 1
        }
    }


    const uniqueCharacter = Object.entries(hashMap).find((item) => item[1] === 1)?.[0];


    return s.split("").findIndex(char => char === uniqueCharacter)
};