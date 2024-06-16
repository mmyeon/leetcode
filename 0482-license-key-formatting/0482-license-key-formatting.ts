function licenseKeyFormatting(s: string, k: number): string {
    const letters = s.split("").filter(letter => letter !== "-").map(letter => letter.toUpperCase()).join("");
    let result: string[] = [];
    let length = letters.length

    for (let i = length; i > 0; i -= k) {
        let start = Math.max(i - k, 0)
        let part = letters.slice(start, i)
        result.unshift(part)
    }

    return result.join("-")
};