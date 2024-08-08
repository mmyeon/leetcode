function countBits(n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let value = i

        while (value > 0) {
            // 마지막 비트가 1인지 체크 
            count += value & 1
            // 비트 오른쪽으로 이동 
            value >>= 1
        }
        result.push(count);
    }

    return result
};