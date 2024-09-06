function isLongPressedName(name: string, typed: string): boolean {
    let currentNameIndex = 0; 

    // typed 문자열이 더 긴 경우
    // name 문자열이 더 긴 경우
    for(let i = 0; i < typed.length; i++) {
        // name과 typed 문자가 같은 경우 
        if(typed[i] === name[currentNameIndex]) currentNameIndex++;

        // name과 typed 문자가 다르고, 이전 문자와 같지 않은 경우 
        else if (i === 0 || typed[i] !== typed[i-1]) return false; 
    }

    return name.length === currentNameIndex
};