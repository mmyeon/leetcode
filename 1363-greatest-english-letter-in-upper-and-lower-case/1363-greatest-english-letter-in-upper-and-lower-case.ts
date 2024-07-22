function greatestLetter(s: string): string {
    let result = "";

    const charCodeAt = s.split("").map(letter => letter.charCodeAt(0))
    const upperCaseLetters = new Set(charCodeAt.filter(letterCode => letterCode < 97).sort())
    const lowerCaseLetters = new Set(charCodeAt.filter(letterCode => letterCode >= 97))

    for (const upperCaseLetter of upperCaseLetters) {
        if (lowerCaseLetters.has(upperCaseLetter + 32)) {
            result = String.fromCharCode(upperCaseLetter)
        }
    }

    return result;
};