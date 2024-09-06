function isLongPressedName(name: string, typed: string): boolean {
    let currentNameIndex = 0;
    let typedIndex = 0;

    if(name.length > typed.length) return false;

    while (typedIndex <= typed.length) {
        // 두 문자가 같은 경우는 동일 문자니까 index 함께 증가
        if (name[currentNameIndex] === typed[typedIndex]) {
            typedIndex++;
            currentNameIndex++;
        } else {
            // 이전 문자와 다른 경우는 false 리턴
            if (typed[typedIndex] !== typed[typedIndex - 1]) { 
                return false }
            // 문자는 동일한 경우 typedIndex만 업데이트
            else typedIndex++;
        }
    }

    return true;
};