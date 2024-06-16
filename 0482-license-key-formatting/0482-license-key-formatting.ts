function licenseKeyFormatting(s: string, k: number): string {
    // 주어진 s에서 - 제거한 문자배열로 만들기 
    // 모든 문자 대문자화하기 
    // 뒤에서부터 원하는 개수 만큼 split하기 

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