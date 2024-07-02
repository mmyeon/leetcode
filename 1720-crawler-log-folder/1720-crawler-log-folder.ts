function minOperations(logs: string[]): number {

    let i = 0;
    let count = 0;
    while (i < logs.length) {
        if (logs[i] === "../" && count > 0) count--;
        // 파일 폴더명 체크(소문자 복수 + 숫자 복수)
        if (/[a-z0-9]+/.test(logs[i])) count++;
        i++;
    }

    return count;
};