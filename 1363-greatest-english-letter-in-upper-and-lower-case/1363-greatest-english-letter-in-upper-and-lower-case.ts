function greatestLetter(s: string): string {
    let result = "";
    let upperCaseSet = new Set()
    let lowerCaseSet = new Set()

    for (const letter of s) {
        const letterCode = letter.charCodeAt(0)
        if (65 <= letterCode && letterCode <= 90) {
            upperCaseSet.add(letterCode)
        } else if (
            97 <= letterCode && letterCode <= 122
        ) { lowerCaseSet.add(letterCode) }
    }

    for (let i = 90; i >= 65; i--) {
        if (upperCaseSet.has(i) && lowerCaseSet.has(i + 32)) {
            result = String.fromCharCode(i)
            break
        }
    }

    return result;
};