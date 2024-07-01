function threeConsecutiveOdds(arr: number[]): boolean {
    let consecutiveOddCount = 0

    if (arr.length <= 2) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            consecutiveOddCount++;
        } else {
            consecutiveOddCount = 0;
        }

        if (consecutiveOddCount === 3) return true;


    }

    return false;

};