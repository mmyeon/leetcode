
function isIsomorphic(s: string, t: string): boolean {
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapS.get(s[i]) !== mapT.get(t[i])) return false;

        mapS.set(s[i], i)
        mapT.set(t[i], i)
    }

    return true;
};