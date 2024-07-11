
function isIsomorphic(s: string, t: string): boolean {
    let mapS = new Map();
    let mappedT = new Set();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) return false;
        } else {
            if (mappedT.has(charT)) return false;

            mapS.set(charS, charT);
            mappedT.add(charT);
        }
    }

    return true;
};