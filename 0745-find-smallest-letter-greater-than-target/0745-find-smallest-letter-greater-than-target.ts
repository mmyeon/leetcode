function nextGreatestLetter(letters: string[], target: string): string {
    const targetUnicode = target.charCodeAt(0);

    if (targetUnicode < letters[0].charCodeAt(0) || targetUnicode >= letters[letters.length - 1].charCodeAt(0)) return letters[0]

    let start = 0;
    let end = letters.length - 1;


    while (start < end) {
        let middleIndex = Math.floor((start + end) / 2)

        if (targetUnicode < letters[middleIndex].charCodeAt(0)) {
            end = middleIndex;
        } else {
            start = middleIndex + 1;
        }
    }

    return letters[start]
};